const express = require('express');
const router = express.Router();
const db = require('../database/db');
const queries = require('../database/queries');
const { errMsg404, errMsg500 } = require('../constants/errMessages');
const startCountWork = require('../services/startCountWork');

// GET /f-counts
router.get('/', (_, res) => {
  queries.getAllFCounts((err, rows) => {
    if (err) {
      return res.status(500).json(errMsg500);
    }
    return res.status(200).json(rows);
  });
});

// POST /f-counts
router.post('/', (req, res) => {
  const { imgUrl, callbackUrl } = req.body;
  // Cannot be an arrow function due to 'this' being used below
  queries.insertFCount(imgUrl, function (err) {
    if (err) {
      return res.status(500).json(errMsg500);
    }
    // Initialize workflow for image processing (face counting) and callback
    startCountWork(this.lastID, imgUrl, callbackUrl);

    return res.status(201).end();
  });
});

// GET /f-counts/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  queries.getFCountById(id, (err, row) => {
    if (err) {
      return res.status(500).json(errMsg500);
    } else if (!row) {
      return res.status(404).json(errMsg404);
    }
    return res.status(200).json(row);
  });
});

// DELETE /f-counts/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  queries.deleteFCountById(id, (err, numRowsDeleted) => {
    if (err) {
      return res.status(500).json(errMsg500);
    }
    if (numRowsDeleted === 0) {
      return res.status(404).json(errMsg404);
    }
    return res.status(204).end();
  });
});

module.exports = router;