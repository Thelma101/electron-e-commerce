const product = require('../models/product');

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
}

module.exports = {
    getAddProduct,
    addProduct
};