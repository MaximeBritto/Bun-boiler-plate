const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { default: mongoose } = require('mongoose');

// Create a new Pkm
router.post('/', userController.create);
router.get('/', userController.findAll);
router.post('/login', userController.login);

module.exports = router;