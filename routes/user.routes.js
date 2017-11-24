const express = require('express');
const app = express.Router();

const User = require('../models/users');

// Render user create form
app.get('/users/new', function (req, res) {
  res.render("user_new_form");
});

// Create user
app.post('/users', function (req, res) {
  const name = req.body.name;
  const user = new User({name: name});

  user.save()
    .then((savedUser) => {
      res.redirect(`/users/${savedUser._id}`)
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

// List users
app.get('/users', (req, res) => {
  User.find({})
    .select('name')
    .then(users => {
      res.render("users", {users: users});
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

// Show user detail
app.get('/users/:userId', (req, res) => {
  const query = {_id: req.params.userId};
  User.findOne(query)
    .select('name')
    .then(user => {
      res.render("user", {user: user});
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

// Delete a  user
app.delete('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  User.remove({_id: userId})
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

// Update a user
app.put('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = {_id: userId};
  const data = req.body;
  User.update(query, {$set: data})
    .then(() => {
      res.redirect(`/users/${userId}`);
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

// Render user edit form
app.get('/users/:userId/edit', (req, res) => {
  const query = {_id: req.params.userId};
  User.findOne(query)
    .then((user) => {
      res.render('user_edit_form', {user: user});
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(err.message);
    });
});

module.exports = app;