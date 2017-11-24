const port = 3000;

const path = require('path');

const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', require('./routes/user.routes'));

app.get('/', (req, res) => {
  res.redirect('/users');
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