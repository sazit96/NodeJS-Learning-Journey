const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server Is Runing http://${HOST}:${PORT}`);
});
