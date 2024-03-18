const { Worker } = require('worker_threads');

const generateRandNum = () => new Promise((resolve, reject) => {
  const worker = new Worker('./services/generateRandNumWorker.js');

  worker.on('message', resolve);
  worker.on('error', reject);
  worker.on('exit', (code) => {
    if (code !== 0)
      reject(new Error(`node worker exited with code ${code}`));
  });
});

module.exports = generateRandNum;