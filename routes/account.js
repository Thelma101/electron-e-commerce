const express = require('express');
const { getProfile } = require('../controllers/accountController')
const router = express.Router();

router.get('/', getProfile); 

module.exports = router;