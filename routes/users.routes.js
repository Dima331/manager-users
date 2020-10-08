const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth.middleware')

const usersController = require('../controllers/users.controller')

router.get('/', auth, usersController.getUsers);
router.post('/delete', auth, usersController.deleteUsers);

module.exports = router;