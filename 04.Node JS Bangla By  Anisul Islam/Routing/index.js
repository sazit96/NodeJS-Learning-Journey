const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    });
  };
  if (req.url === '/') {
    handleReadFile(200, './html/index.html');
  } else if (req.url === '/about') {
    handleReadFile(200, './html/about.html');
  } else if (req.url === '/contact') {
    handleReadFile(200, './html/contact.html');
  } else {
    handleReadFile(404, './html/error.html');
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server Is Runing At http://${hostName}:${PORT}`);
});
