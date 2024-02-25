const fs = require('fs');

const readText = fs.readFileSync('./text/read.txt', 'utf-8');
console.log(readText);

const write = fs.writeFileSync(
  './text/write.txt',
  `Alhumdulillah ${readText} `
);
