const express = require('express');
const app = express();
const PORT = 3000;

// Query parameter
app.get('/', (req, res) => {
  const { id, name } = req.query;
  res.send(`the student name is ${name} id is ${id}`);
});

//Route parameter
app.get('/userId/:id/userAge/:age', (req, res) => {
  const { id, age } = req.params;
  res.send(`student id is ${id} and Age is ${age}`);
});

// Header
app.get('/', (req, res) => {
  const id = req.header('id');
  const name = req.header('name');
  res.send(`student id is ${id} and name is ${name}`);
});

app.listen(PORT, () => {
  console.log(`Alhumdulillah Server Is Runing http://localhost:${PORT}`);
});
