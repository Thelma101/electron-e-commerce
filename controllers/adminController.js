const Product = require('../models/product');
const { productValidation } = require("../middlewares/validate");

const getAddProduct = async (req, res) => {
    try {
        res.render('add-product')
    } catch (error) {
        console.log(error);
        res.render("error", {
            pageTitle: "Error",
            path: "/error",
            error: error,
            message: "Something went wrong. Please try again later.",
            stack: stack.error
        })
    }
};

const addProduct = async (req, res) => {
    try {
        const { title, price, description, imageUrl } = req.body;
        const product = new Product({
            title,
            price,
            description,
            imageUrl,
            userId: req.user._id
        });
        await product.save();
        res.redirect('/admin/products');
    } catch (error) {
        console.log(error);
        res.render("error", {
            pageTitle: "Error",
            path: "/error",
            error: error,
            message: "Something went wrong. Please try again later.",
            stack: stack.error
        })
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { title, price, description, imageUrl } = req.body;
        const product = await Product.findById(productId);
        product.title = title;
        product.price = price;
        product.description = description;
        product.imageUrl = imageUrl;
        await product.save();
        res.redirect('/admin/products');
    } catch (errro) {
        console.log(error);
        res.render("error", {
            pageTitle: "Error",
            path: "/error",
            error: error,
            message: "Something went wrong. Please try again later.",
            stack: stack.error
        })
    }
};

module.exports = {
    getAddProduct,
    addProduct,
    updateProduct
};