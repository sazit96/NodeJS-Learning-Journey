const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send('ALhumdulillah');
});
app.listen(port, () => {
  console.log(`Alhumdulillah server is Runing On ${port}`);
});
