const express = require("express");
const router = express.Router();

const registrarionController = require('../controllers/registrarion.controller');
const authController = require('../controllers/auth.controller');

router.post('/register', registrarionController.addUser);
router.post('/login', authController.loginUser);

module.exports = router;