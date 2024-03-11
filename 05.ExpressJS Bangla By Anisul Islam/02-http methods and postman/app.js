const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Alhumdulillah I Am To  Get You Allah');
  res.end();
});
app.post('/', (req, res) => {
  res.send('Alhumdulillah I Am Post How I Love You Allah');
  res.end();
});
app.put('/', (req, res) => {
  res.send('Alhumdulillah I Am Put Shala To You');
  res.end();
});
app.delete('/', (req, res) => {
  res.send('Alhumdulillah I Am Deleteing Bad thing On My Life');
  res.end();
});

module.exports = app;
