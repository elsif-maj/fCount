const { parentPort, workerData } = require('worker_threads');
const axios = require('axios');
const tf = require('@tensorflow/tfjs-node')
const faceapi = require('@vladmandic/face-api');
const canvas = require('canvas')

async function countFaces(imgUrl) {
  try {
    // Monkeypatch with Canvas
    const { Canvas, Image, ImageData } = canvas;
    faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

    // Select model and process image
    const faceDetectionNet = faceapi.nets.ssdMobilenetv1
    await faceDetectionNet.loadFromDisk('./services/weights');

    // Fetch image from URL
    const response = await axios({
      url: imgUrl,
      method: 'GET',
      responseType: 'arraybuffer',
    });

    const img = await canvas.loadImage(response.data);
    const detections = await faceapi.detectAllFaces(img);

    parentPort.postMessage(detections.length);
    console.log('image processing done, this is from the worker');
  } catch (error) {
    parentPort.postMessage("Message from countFaces worker: ", error);
    console.error("Error with countFaces function: ", error);
  }
}

countFaces(workerData)
