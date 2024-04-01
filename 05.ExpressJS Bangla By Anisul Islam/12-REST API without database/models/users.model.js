const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: uuidv4(),
    username: 'Ehosanul Islam',
    email: 'sazitislam96@gmail.com',
  },
  {
    id: uuidv4(),
    username: 'Sazit',
    email: 'sazitkhan96@gmail.com',
  },
];

module.exports = users;
