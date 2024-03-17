const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("GET /f-counts")
});

router.post('/', (req, res) => {
  res.send("POST /f-counts")
});

router.get('/:id', (req, res) => {
  res.send("GET /f-counts/:id")
});

router.delete('/:id', (req, res) => {
  res.send("DELETE /f-counts/:id")
});

module.exports = router;