const {
    getHome,
    getShop,
    getAbout,
    getContact,
    getFaq,
    getArticles,
    getArticleDetails,
    getProduct,
    getProductDetails,
    getSearch,
    getReturnPolicy,
} = require('../controllers/generalController')

const express = require('express');
const router = express.Router();

router.get('/', getHome);
router.get('/shop', getShop)
router.get('/about', getAbout);
router.get('/contact', getContact);
router.get('/faq', getFaq);
router.get('/articles', getArticles);
router.get('/articles/:id', getArticleDetails);
router.get('/product', getProduct);
router.get('/product/:id', getProductDetails);
router.get('/search', getSearch);
router.get('/return-policy', getReturnPolicy);


module.exports = router;