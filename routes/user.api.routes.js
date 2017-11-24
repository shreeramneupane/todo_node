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
      res.send({error: {message: err.message}});
    });
});

// Create user
app.post('/', function (req, res) {
  const name = req.body.name;
  const user = new User({name: name});

  user.save()
    .then((savedUser) => {
      res.send(savedUser);

    })
    .catch((err) => {
      res.statusCode = 400;
      res.send({error: {message: err.message}});
    });
});

module.exports = app;