const express = require('express');
const app = express();
const db = require('./db');
const student = require('./student');
const port = 3000;

app.use('/api', student);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
