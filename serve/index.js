const bs = require('browser-sync').create();
const { exec } = require('child_process');

const execute = (cmd) => new Promise((resolve, reject) => {
  const handle = exec(cmd, (error, stdout, stderr) => {
    console.log(stderr);
    if (error) return reject(stderr);
    resolve(stdout);
  });
  handle.stdout.on('data', (data) => console.log(data));
});
const buildTask = () => execute('rollup -c');
bs.init({
  notify: false,
  open: false,
  server: ['node_modules/.event-hub/', './'],
  files: ['./index.html', './README.md', {
    match: ['src/**/*.ts'],
    fn() {
      buildTask().then(() => bs.reload());
    },
  }],
});
