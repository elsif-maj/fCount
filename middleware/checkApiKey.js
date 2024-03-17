const checkApiKey = (req, res, next) => {
  const reqApiKey = req.headers['x-api-key'];
  const serverApiKey = process.env.TEST_API_KEY;

  if (!reqApiKey || reqApiKey !== serverApiKey) {
    return res.status(401).end();
  }
  next();
}

module.exports = checkApiKey