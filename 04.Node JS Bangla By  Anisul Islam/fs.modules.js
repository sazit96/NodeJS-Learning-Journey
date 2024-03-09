// FS Modules
const fs = require('fs');

fs.writeFile(
  './files/write&&appendfile.txt',
  'My Name Is Ehosanul Islam Sazit',
  (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File write successful');
    }
  }
);

fs.appendFile('./files/write&&appendfile.txt', '\nI Am 23 Years Old', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file Append successful');
  }
});

fs.readFile('./files/write&&appendfile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.rename('./files/forrename.txt', './files/renamed.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Rename Successful');
  }
});

fs.unlink('./files/delete.txt', (err) => {
  if (err) console.log(err);
  console.log('delete successful');
});
