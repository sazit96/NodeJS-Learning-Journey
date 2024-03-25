const express = require('express');
const app = express();
const PORT = 3000;

app.get('/products/:id([1-9]+)', (req, res) => {
  res.send(`<h2> ID = ${req.params.id} </h2>`);
});

app.get('/products/:title([a-zA-z]+)', (req, res) => {
  res.send(`<h2> title = ${req.params.title} </h2>`);
});

app.use('*', (req, res) => {
  res.status(404).send({
    message: 'Not Valid Route',
  });
});

app.listen(PORT, () => {
  console.log(`Alhumdulillah Server Is Runing On http://localhost:${PORT}`);
});
