const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth.middleware');

const usersController = require('../controllers/users.controller');

router.get('/get', auth, usersController.getUsers);
router.post('/delete', auth, usersController.deleteUsers);
router.post('/block', auth, usersController.blockUsers);
router.post('/unblock', auth, usersController.unBlockUsers);

module.exports = router;
