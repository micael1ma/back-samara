const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const WithAuth = require('../middlewares/auth');

router.get('/user', userController.getAllUsers);
router.put('/user/:id', WithAuth, userController.updateUser);
router.delete('/user/:id', WithAuth, userController.deleteUser);

module.exports = router;
