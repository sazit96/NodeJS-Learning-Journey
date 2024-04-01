const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.routes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// If route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: 'route not Found',
  });
});

// Server error
app.use((req, res, err, next) => {
  res.status(500).json({
    Message: 'Something Broke',
  });
});
module.exports = app;
