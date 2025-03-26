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
}

module.exports = {
    getAddProduct
};