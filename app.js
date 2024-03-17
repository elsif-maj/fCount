const express = require('express');
const app = express();
const fCountRouter = require('./routes/fCountRouter');
const db = require('./database/db');
const queries = require('./database/queries');
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = YAML.load('./openApi3.yml');

app.use(express.json());

// Create SQLite DB and Table
queries.createFCountTable();

// Base path for the API 
app.use('/f-counts', fCountRouter);
// API documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

module.exports = app;