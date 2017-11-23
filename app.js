const port = 3000;

const path = require('path');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end("Hello World!");
});

app.get('/hello_form', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/hello_form.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});