import fs = require('fs');
import path = require('path');
import express = require('express');
import expressWs = require('express-ws');
import { spawn, ChildProcess } from 'child_process';
import readline = require('readline');
import bodyParser = require('body-parser');
import { Readable } from 'stream';

const ui = path.join(__dirname, '..', 'ui');
const runtimeSupportPath = path.join(__dirname, '..', 'runtime_support.py');
const scriptPath = path.join(__dirname, '..', 'tmp', 'output.py');
const packagePath = path.join(__dirname, 'package.json');

const app = express();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

expressWs(app);

let proc: ChildProcess;

let lineReporter: (msg: string) => void;
let inputFeed: (inp: string) => void;

app.post('/runcode', (req, res) => {
  const { code } = req.body;

  const runtimeSupport = fs.readFileSync(runtimeSupportPath);

  fs.writeFileSync(scriptPath, runtimeSupport + code);

  // Kill the last process if it is still running...
  if (proc) {
    proc.kill('SIGTERM');

  }

  proc = spawn('python3', ['-u', scriptPath], { stdio: ['pipe', 'pipe', 'pipe'] });

  console.log(code);

  const rl = readline.createInterface({
    input: proc.stdout,
  });

  rl.on('line', (input) => {
    console.log(`LINE: ${input}`);

    if (lineReporter) {
      lineReporter(input);
    }
  });

  proc.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);

    if (lineReporter) {
      lineReporter('ERROR: ' + data);
    }
  });

  proc.on('close', (code) => {
    if (lineReporter) {
      lineReporter(`==== Process complete (${code}) ====`);
    }

    res.send(`Done ${code}`);
  });

  inputFeed = (inp) => {
    try {
      // Ctrl-C should kill process
      if (inp.length === 1 && inp[0] === String.fromCharCode(3)) {
        proc.kill('SIGTERM');
      } else {
        // Echo the send command back to the client
        if (lineReporter) {
          lineReporter(inp);
        }

        // Need to add new line character on end
        proc.stdin.write(inp + '\n');
      }
    } catch (e) { }
  };
});

app.ws('/terminal', (ws, req: express.Request) => {
  lineReporter = (msg) => {
    try {
      ws.send(msg);
    } catch (e) { }
  };

  const version = JSON.parse(fs.readFileSync(packagePath, 'utf8')).version;

  ws.send(`EduBlocks server version ${version} online and ready`);

  ws.on('message', (msg) => {
    console.log(`INP: ${msg}`);

    if (inputFeed) {
      inputFeed(msg);
    }
  });
});

app.use(express.static(ui));

app.listen(8081, () => {
  console.log('EduBlocks server now listening on port 8081!');
});
