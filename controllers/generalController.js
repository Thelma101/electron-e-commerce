const express = require('express');
const router = express.Router();
// const db = require('../models');
// const model = require('../models/');
const contactModel = require('../models/contact');
const productModel = require('../models/product');
const accountModel = require('../models/account');


const getHome = async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
        res.render('index');
    }
};

const getContact = async (req, res) => {
    try {
        res.render('contact', {
            successMessage: req.query?.message,
            errorMessage: req.query?.error,
        });
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getShop = async (req, res) => {
    try {
        res.render('shop');
    } catch (error) {
        res.status(500).json({
            errorMessage: "Something went wrong, please try again later",
            error: error.message,
            stack: error.stack
        })
    }
};

const getAbout = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getFaq = async (req, res) => {
    try {
        res.render('faq');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getSearch = async (req, res) => {
    try {
        res.render('search');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getProduct = async (req, res) => {
    try {
        res.render('products');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getProductDetails = async (req, res) => {
    try {
        res.render('productDetails');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getReturnPolicy = async (req, res) => {
    try {
        res.render('returnPolicy');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getArticles = async (req, res) => {
    try {
        res.render('articles');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

const getArticleDetails = async (req, res) => {
    try {
        res.render('articleDetails');
    } catch (error) {
        console.log(error);
        res.render('error', {
            errorMessage: 'Something went wrong, please try again later',
            status: 500,
            stack: error.stack,
        });
    }
};

    const submitMessage = async (req, res) => {
        try {
            const { name, email, phone, message } = req.body;
            if (!name || name.trim() === "") {
                return res.redirect('/contact?error=Name is required');
            }
            if (!email || email.trim() === "") {
                return res.redirect('/contact?error=Email is required');
            }
            if (!email.match(/^[s@]+@[^\s@]+\.[^\s@]+$/)) {
                return res.redirect('/contact?error=Email is not valid')
            }
            if (!phone || phone.trim() === "") {
                return res.redirect('/contact?error=Phone is required');
            }
            if (!phone.match(/^[\d]{3}[-\s.]?[\d]{3}[-\s.]?[\d]{4}$/)) {
                return res.redirect('/contact?error=Phone is not valid')
            }
            if (!message || message.trim() === "") {
                return res.redirect('/contact?error=Message is required');
            }

            await contactModel.create({
                name: name,
                email: email,
                phone: phone,
                message: message
            });
        } catch (error) {
            console.log('error', {
                errorMessage: 'Something went wrong, please try again later',
                status: 500,
                stack: error.stack,
            });
        }
    };

    module.exports = {
        getHome,
        getShop,
        getAbout,
        getFaq,
        getSearch,
        getProduct,
        getContact,
        getArticles,
        getArticleDetails,
        getProductDetails,
        getReturnPolicy,
        submitMessage
    }