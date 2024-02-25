const fs = require('fs');
//Reading files
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});

//Writing files
fs.writeFile('./docs/blog.txt', 'EHOSANUL ISLAM SAZIT', () => {
  console.log('File was Written');
});
fs.writeFile('./docs/blog1.txt', 'Alhumdulillah', () => {
  console.log('File was written');
});

//Dircetories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) console.log(err);
    console.log('file was created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) console.log(err);
    console.log('file was deleted');
  });
}

//deleting file
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) console.log(err);
    console.log('file was deleted');
  });
}
