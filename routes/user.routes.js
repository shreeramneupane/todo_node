const express = require('express'),
  app = express.Router();

app.get('/new_routes', (req, res) => {
  res.end("New Route")
});

module.exports = app;