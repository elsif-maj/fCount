require('dotenv').config();
const express = require('express');
const app = express();
const fCountRouter = require('./routes/fCountRouter');
const db = require('./database/db');
const queries = require('./database/queries');
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = YAML.load('./openApi3.yml');
const checkApiKey = require('./middleware/checkApiKey')
const apiValidator = require('express-openapi-validator');
const errorHandler = require('./middleware/errorHandler');
// Create SQLite DB and Table
queries.createFCountTable();

// General middleware
app.use(express.json());

// API documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// API route middleware
app.use(checkApiKey);
app.use(
  apiValidator.middleware({
    apiSpec: './openApi3.yml',
    validateRequests: true,
    validateResponses: true,
  }),
);

// Base path for the API 
app.use('/f-counts', fCountRouter);

// Error handling
app.use(errorHandler)

module.exports = app;