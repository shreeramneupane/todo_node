const express = require('express');
const app = express.Router();

const User = require('../models/users');

// List users
app.get('/', (req, res) => {
  User.find({})
    .select('name')
    .then(users => {
      res.send({users: users});
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

module.exports = app;