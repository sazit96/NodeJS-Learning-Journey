require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Alhumdulillah i am in home');
});

app.listen(PORT, () => {
  console.log(`Alhumdulillah Server Was Running On http://localhost:${PORT}`);
});
