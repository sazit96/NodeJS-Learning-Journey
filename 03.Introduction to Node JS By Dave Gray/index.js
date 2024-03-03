const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'textfiles', 'starter.txt'),
      'utf-8'
    );
    console.log(data);
    await fsPromises.unlink(
      path.join(__dirname, 'textfiles', 'starter.txt'),
      data
    );
    await fsPromises.writeFile(
      path.join(__dirname, 'textfiles', 'promiseWrite.txt'),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'textfiles', 'promiseWrite.txt'),
      '\n\nNice to meet you'
    );
    await fsPromises.rename(
      path.join(__dirname, 'textfiles', 'promiseWrite.txt'),
      path.join(__dirname, 'textfiles', 'promiseComplete.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'textfiles', 'promiseComplete.txt'),
      'utf-8'
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
//Read filess
fs.readFile(
  /*'./textfiles/starter.txt',*/ path.join(
    __dirname,
    'textfiles',
    'starter.txt'
  ),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data /*.toString()*/);
  }
);

console.log('Alhumdulillah'); // this will come first

//Write file
fs.writeFile(
  path.join(__dirname, 'textfiles', 'text-reply.txt'),
  'Olikumassalam i am Ehosanul',
  (err) => {
    if (err) throw err;
    console.log('Write complete');
  }
);
fs.appendFile(
  path.join(__dirname, 'textfiles', 'test.txt'),
  'Ehosanul',
  (err) => {
    if (err) throw err;
    console.log('append complete');
  }
);

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
