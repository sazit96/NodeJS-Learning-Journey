const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/user', (req, res) => {
//   const name = req.body.name;
//   res.send(`Welcome ${name}`);
// });

//send and receive form data
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2>1. Your Name Is ${fullName} <br> 2. Your Age Is ${age}</h2>`);
});

app.listen(PORT, () => {
  console.log(`server is runing http://localhost:${PORT}`);
});
