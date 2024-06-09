import express from 'express';
import mongoose from 'mongoose';
import models from './models/index.js';
const app = express();
const port = 3000;
app.use(express.json());

const log = (msg) => console.log(msg);

const uri = 'mongodb://localhost:27017/parcelkoi';
const options = {};

const connectWithDb = () => {
  mongoose
    .connect(uri, options)
    .then(() => {
      console.log('Database connection established');
    })
    .catch((err) => {
      console.log(err);
    });
};

connectWithDb();

app.get('/', (req, res) => {
  res.send('Alhumdulillah inshaAllah ' + req.query.id);
});

app.post('/', (req, res) => {
  const body = req.body;
  const user = new models.User({
    username: body.username,
    createdAt: new Date(),
  });
  user
    .save()
    .then((saveUser) => {
      res.status(201).send('User save ID: ' + saveUser._id);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

log(models);
