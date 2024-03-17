const express = require('express');
const app = express();
const fCountRouter = require('./routes/fCountRouter');

// Base path for the API 
app.use('/f-counts', fCountRouter);

module.exports = app;