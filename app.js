const port = 3000;

const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});