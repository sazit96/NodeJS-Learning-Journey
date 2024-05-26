const express = require('express');
const app = express();
const db = require('./db'); // Import the database connection
const student = require('./student');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Alhumdulillah');
});

app.listen(port, () => {
  console.log(`server is runing http://localhost:${port}`);
});
