const express = require('express');
const router = express.Router();

// GET /f-counts
router.get('/', (req, res) => {
  res.send("GET /f-counts")
});

// POST /f-counts
router.post('/', (req, res) => {
  res.send("POST /f-counts")
});

// GET /f-counts/:id
router.get('/:id', (req, res) => {
  res.send("GET /f-counts/:id")
});

// DELETE /f-counts/:id
router.delete('/:id', (req, res) => {
  res.send("DELETE /f-counts/:id")
});

module.exports = router;