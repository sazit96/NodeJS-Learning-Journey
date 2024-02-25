const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt');

readStream.on('data', (chank) => {
  console.log('==========New Chank-----------');
  console.log(chank.toString());

  writeStream.write('\nNEW CHANK\n');
  writeStream.write(chank);
});

// piping
readStream.pipe(writeStream);
