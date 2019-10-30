const pty = require('node-pty');
import { ITerminal } from 'node-pty/src/interfaces';

interface TerminalEvents {
  on(event: 'data', handler: (data: string) => void): void;
}

function initProcess(cmd: string, args: any[]) {
  let onData = (data: string) => { };

  let cols = 80, rows = 30;

  const proc: ITerminal & TerminalEvents = pty.spawn(cmd, args, {
    name: 'xterm-color',
    cols,
    rows,
    cwd: process.env.HOME,
    env: process.env,
  });

  proc.on('data', (data) => {
    // process.stdout.write(data);

    onData(data);
  });

  return {
    write(data: string) {
      proc.write(data);
    },

    resize(c: number, r: number) {
      cols = c; rows = r;

      try {
        proc.resize(cols, rows);
      } catch (e) {
        console.error('Error resizing terminal', e);
      }
    },

    terminate() {
      proc.kill('SIGTERM');
    },

    setOnData(handler: typeof onData) {
      onData = handler;
    },

    getSize() {
      return { cols, rows };
    }
  };
}

export {
  initProcess,
};
