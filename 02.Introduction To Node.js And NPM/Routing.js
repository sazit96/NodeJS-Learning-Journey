const http = require('http');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('this is the overview!');
  } else if (pathName === '/product') {
    res.end('this is the product');
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
