const { parentPort } = require('worker_threads');

setTimeout(() => {
  const n = Math.floor(Math.random() * 26);
  parentPort.postMessage(n);
}, 1500);