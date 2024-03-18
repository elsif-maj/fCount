const axios = require('axios');

const sendCallback = async (id, imgUrl, randNum, callbackUrl) => {
  const callbackBody = {
    id: id,
    url: imgUrl,
    status: "completed",
    fcount: randNum
  }

  try {
    await axios.post(callbackUrl, callbackBody);
  } catch (e) {
    console.error("Error with callback POST request: ", e.message)
  }
}

module.exports = sendCallback;