const fs = require('fs');
const rs = fs.createReadStream('./textfiles/lorem.txt', { encoding: 'utf-8' });
const ws = fs.createWriteStream('./textfiles/new-lorem.txt');
// rs.on('data', (datachunk) => {
//   ws.write(datachunk);
// });
rs.pipe(ws);
