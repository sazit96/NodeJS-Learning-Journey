const express = require('express');
const app = express();
const usersRouter = require('./routes/users.route');

app.use('/api/user/', usersRouter);

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/register', (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
  res.cookie('name', 'sazit');
  res.cookie('age', '23');
  res.clearCookie('name');
  res.end();
});

app.use((req, res) => {
  res.status(404).send('<h1>404 !! this page is not valid</h1>');
});

module.exports = app;
