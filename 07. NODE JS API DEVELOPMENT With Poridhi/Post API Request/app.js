const express = require('express');
const app = express();
const port = 4001;

app.use(express.json());

app.post('/singup', (req, res) => {
  const { name, age, location } = req.body;
  console.log(name, age, location);
  console.log(req.headers['token']);
  //res.send(`${name} ${age} ${location}`);
});

app.listen(port, () => {
  console.log(`Server is Runing On ${port}`);
});
