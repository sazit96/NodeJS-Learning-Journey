const express = require('express');
const app = express();
const PORT = 3000;

//MiddleWare
// const myMiddleWare = (req, res, next) => {
//   console.log('This is a middle ware function');
//   req.currentTime = new Date(Date.now());
//   next();
// };

// app.use((req, res, next) => {
//   res.send('404 bad url request ');
// });

// // this will accecss all
// app.use(myMiddleWare);

// app.get('/', myMiddleWare, (req, res) => {
//   console.log(`i am home` + req.currentTime);
//   res.send('Alhumdulillah i am in home page');
// });

// app.get('/about', (req, res) => {
//   console.log(`i am in about page ` + req.currentTime);
//   res.send('Alhumdulillah i am in about page');
// });

//static middleware
app.use(express.static('public'));

app.get('/alhumdulillah', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server Is Runing On http://localhost:${PORT}`);
});
