const express = require('express');
const app = express();
const fCountRouter = require('./routes/fCountRouter');
const db = require('./database/db');
const queries = require('./database/queries');

app.use(express.json());

// Create SQLite DB and Table
queries.createFCountTable();

// Base path for the API 
app.use('/f-counts', fCountRouter);

module.exports = app;