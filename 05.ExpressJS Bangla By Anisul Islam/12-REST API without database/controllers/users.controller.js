let users = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');

// get users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// Create users
const createUser = (req, res) => {
  const newUsers = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUsers);
  res.status(201).json({ users });
};

// update user
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((seleteduser) => {
      seleteduser.username = username;
      seleteduser.email = email;
    });
  res.status(200).json({ message: users });
};

// delete user
const deleteuser = (req, res) => {
  const userid = req.params.id;
  users.filter((user) => user.id !== userid);
  res.status(200).json({ users });
};

module.exports = { getAllUsers, createUser, updateUser, deleteuser };
