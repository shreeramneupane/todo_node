const port = 3000;

const path = require('path');

const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const User = require('./models/users');

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', require('./routes/user.routes'));

app.get('/', (req, res) => {
  res.redirect('/users');
});

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

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

function connect() {
  var mongoDB = 'mongodb://localhost/todo_database';
  return mongoose.connect(mongoDB, {
    useMongoClient: true
  });
}