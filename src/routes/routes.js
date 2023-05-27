const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const message = 'Bem-vindo à API GeoPoly!';
  res.json({ message });
});

module.exports = router;
