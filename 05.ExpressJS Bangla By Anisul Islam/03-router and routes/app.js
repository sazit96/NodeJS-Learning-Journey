const express = require('express');
const app = express();
const usersRouter = require('./routes/users.route');

app.use('/api/user/', usersRouter);

app.use('/', (req, res) => {
  res.send('Alhumdulillah I Get You Allah');
  res.end();
});

app.use((req, res) => {
  res.send('<h1> 404 !! this page is not valid</h1>');
  res.end();
});

module.exports = app;
