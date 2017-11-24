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

// Update user
app.put('/:userId', function (req, res) {
  const userId = req.params.userId;
  const query = {_id: userId};
  const data = req.body;
  User.update(query, {$set: data})
    .then(() => {
      return User.findOne(query)
        .then((user) => {
          res.send(user);
        })
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send({error: {message: err.message}});
    });
});

// Delete user
app.delete('/:userId', function (req, res) {
  const userId = req.params.userId;
  const query = {_id: userId};
  User.remove(query)
    .then(() => {
      res.send({message: 'User deleted successfully.'})
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send({error: {message: err.message}});
    });
});

module.exports = app;