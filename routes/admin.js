const express = require('express');
const { getAddProduct } = require('../controllers/adminController.js');
const router = express.Router();

router.get('/add-product', getAddProduct);

module.exports = router;
