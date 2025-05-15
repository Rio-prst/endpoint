const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser
} = require('./handler');

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
router.put('/user/:id', updateUser);

module.exports = router;