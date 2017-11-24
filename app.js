const port = 3000;

const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.end("Hello World!");
});

app.get('/hello_form', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/hello_form.html'));
});

app.post('/hello', function (req, res) {
  res.end(`Hello ${req.body.name}!`);
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