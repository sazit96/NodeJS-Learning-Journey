const express = require('express');
const app = express();
const port = 4000;

app.get('/students', (req, res) => {
  res.send('Alhumdulillah i am sazit');
});

app.get('/employees', (req, res) => {
  const id = req.query.id;
  const dept = req.query.dept;
  console.log(dept);
  console.log(id);
  if (id) {
    res.send(`Ehosanul islam sazit`);
  } else res.send(`NO id found`);
});

app.get('/employees/:id/:dept', (req, res) => {
  res.send('Alhumdulillah done');
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
