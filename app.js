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

app.use(express.json());

// Create SQLite DB and Table
queries.createFCountTable();

// API documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Route middleware
app.use(checkApiKey);

// Base path for the API 
app.use('/f-counts', fCountRouter);

module.exports = app;