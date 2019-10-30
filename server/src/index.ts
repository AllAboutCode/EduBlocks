import fs = require('fs');
import path = require('path');
import express = require('express');
const expressWs = require('express-ws');
const bodyParser = require('body-parser');
import { initProcess } from './process';
import { Packet } from './common/protocol';

interface EduBlocksClient {
  pos: number;
  sendPacket(packet: Packet): void;
}

const homeDirPath = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']!;
const eduBlocksWorkingPath = path.join(homeDirPath, '.edublocks');

if (!fs.existsSync(eduBlocksWorkingPath)) {
  fs.mkdirSync(eduBlocksWorkingPath);
}

const ui = path.join(__dirname, '..', '..', 'ui');
const scriptPath = path.join(eduBlocksWorkingPath, 'output.py');
const packagePath = path.join(__dirname, '..', 'package.json');

const beforeScriptPath = path.join(__dirname, '..', '..', 'script-includes', 'before.py');
const afterScriptPath = path.join(__dirname, '..', '..', 'script-includes', 'after.py');

const version = JSON.parse(fs.readFileSync(packagePath, 'utf8')).version;

console.log(`Version: ${version}`);
console.log(`Scripts will be written to: ${scriptPath}`);

const app = express();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

expressWs(app);

let proc = initProcess('ipython3', []);

proc.setOnData(writeToAllClients);

const clients: EduBlocksClient[] = [];

let log = '';

function clearLog() {
  log = '';
}

function writeToAllClients(data: string) {
  log += data;

  clients.forEach(client => {
    client.sendPacket({
      packetType: 'data',
      payload: log.substring(client.pos),
    });

    client.pos = log.length;
  });
}

app.post('/runcode', (req, res) => {
  clearLog();

  const { code } = req.body;

  const beforeScript = fs.readFileSync(beforeScriptPath);
  const afterScript = fs.readFileSync(afterScriptPath);

  const exec = [beforeScript, code, afterScript].join('\r\n');

  fs.writeFileSync(scriptPath, exec);

  // Used to store the previous size
  let cols: number | null = null, rows: number | null = null;

  // Kill the last process if it is still running...
  if (proc) {
    const size = proc.getSize();

    cols = size.cols;
    rows = size.rows;

    proc.terminate();
  }

  proc = initProcess('python3', ['-u', scriptPath]);

  if (cols && rows) {
    proc.resize(cols, rows);
  }

  proc.setOnData(writeToAllClients);

  res.send('Started');
});

app.ws('/terminal', (ws, req) => {
  const client: EduBlocksClient = {
    pos: 0,

    sendPacket(packet) {
      try {
        ws.send(JSON.stringify(packet));
      } catch (e) { }
    },
  };

  const index = clients.push(client) - 1;

  console.log(`Successfully connected to Device ${index}`);

  ws.on('message', (json: string) => {
    const packet: Packet = JSON.parse(json);

    switch (packet.packetType) {
      case 'data':
        proc.write(packet.payload);

        break;

      case 'resize':
        const { cols, rows } = packet.payload;

       // console.log(`X: ${cols} Y:${rows}`);

        if (proc) proc.resize(cols, rows);

        break;
    }
  });

  ws.on('close', () => {
    const index = clients.indexOf(client);

    console.log(`Device ${index} has been disconnected`);

    clients.splice(index, 1);
  });
});

app.get('/', (req, res, next) => {
  const indexPath = path.join(ui, 'index.html');

  const contents = fs.readFileSync(indexPath, 'utf8');

  const injected = contents.replace(
    '<meta name="x-host-type" content="" />',
    '<meta name="x-host-type" content="RaspberryPi" />',
  );

  res.status(200).send(injected);
});

app.use(express.static(ui));

app.listen(8081, () => {
  console.log('EduBlocks Connect now listening on port 8081!')
  console.log('Launch http://app.edublocks.org and select the "Raspberry Pi" mode to get started!')
});
