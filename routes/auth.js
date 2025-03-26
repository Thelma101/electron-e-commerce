const express = require('express');
const { getLogin, getRegister } = require('../controllers/authController')
const router = express.Router();

router.get('/login', getLogin);
router.get('/register', getRegister);

module.exports = router;