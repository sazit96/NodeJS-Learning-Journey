const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application.json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Alhumdulillah',
    });
    res.end('<h1>this not found !</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to requests on part 8000');
});
