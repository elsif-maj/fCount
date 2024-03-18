const generateRandNum = require('./generateRandNum');
const queries = require('../database/queries');
const sendCallback = require('./sendCallback');

const startCountWork = async (id, imgUrl, callbackUrl) => {
  // Determine the number of faces in the image
  const numOfFaces = await generateRandNum();

  // Update DB record status to "completed" and fCount number
  queries.updateFCountProcessed(id, numOfFaces);

  // Send a POST request to the callback URL
  sendCallback(id, imgUrl, numOfFaces, callbackUrl)
}

module.exports = startCountWork;