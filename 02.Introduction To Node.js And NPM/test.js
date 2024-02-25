const fs = require('fs');

fs.readFile('./text/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('Error');
  fs.readFile(`./text/readthis.txt`, 'utf-8', (err, data2) => {
    console.log(data1 + ' ' + data2);
    fs.writeFile(
      './text/finalText.txt',
      `${data1}\n ${data2}`,
      'utf-8',
      (err) => {
        console.log('your file has been writen');
      }
    );
  });
});
