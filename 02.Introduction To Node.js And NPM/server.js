const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.end(`Alhumdulillah`);
});

server.listen(8001, '127.0.0.1', () => {
  console.log(`Server listening too request on part 8000`);
});
