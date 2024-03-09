const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';
const myServer = http.createServer((req, res) => {
  res.end('Server Was Created Alhumdulillah');
});
// myServer.listen(3000, () => {
//   console.log('Server Was Runing On localhost:3000');
// });
myServer.listen(port, hostname, () => {
  console.log(`Server Was Runing On http://${hostname}:${port}`);
});
