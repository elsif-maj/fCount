const { Worker } = require('worker_threads');

// formatted
const detectFaces = (imgUrl) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./services/detectFacesWorker.js', { workerData: imgUrl });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log("Worker exited with code: ", code)
      if (code !== 0)
        reject(new Error(`node worker exited with code ${code}`));
    });
  });
};

module.exports = detectFaces;