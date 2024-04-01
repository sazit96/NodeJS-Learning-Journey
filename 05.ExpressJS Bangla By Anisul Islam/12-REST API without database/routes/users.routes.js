const {
  getAllUsers,
  createUser,
  updateUser,
  deleteuser,
} = require('../controllers/users.controller');

const router = require('express').Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteuser);

module.exports = router;
