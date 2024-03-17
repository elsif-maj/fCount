const express = require('express');
const router = express.Router();
const db = require('../database/db');
const queries = require('../database/queries');

// GET /f-counts
router.get('/', (_, res) => {
  queries.getAllFCounts((err, rows) => {
    if (err) {
      return res.status(500).end();
    }
    return res.status(200).json(rows);
  });
});

// POST /f-counts
router.post('/', (req, res) => {
  const { imgUrl, callbackUrl } = req.body;
  if (!imgUrl || !callbackUrl) {
    return res.status(400).end()
  }

  queries.insertFCount(imgUrl, (err) => {
    if (err) {
      return res.status(500).end();
    }

  // NB:
  // initialize the img processing and callback flow
  
  return res.status(201).end();
  });
});

// GET /f-counts/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  queries.getFCountById(id, (err, row) => {
    if (err) {
      return res.status(500).end();
    } else if (!row) {
      return res.status(404).end();
    }
    return res.status(200).json(row);
  });
});

// DELETE /f-counts/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  queries.deleteFCountById(id, (err, numRowsDeleted) => {
    if (err) {
      return res.status(500).end();
    }
    if (numRowsDeleted === 0) {
      return res.status(404).end();
    }
    return res.status(204).end();
  });
});

module.exports = router;