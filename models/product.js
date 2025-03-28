const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currentprice: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    rating: {
        type: Number,
        required: true
    },
    reveiws: {
        type: Number,
        required: true
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },
    stock: {
        type: Number,
        required: true,
    },
    instock: {
        type: Boolean,
        default: true
    },
    colors: [
        "black",
        "red",
        "green",
    ],
    images: [
        "http://localhost:5008/profile/electron.jpg",
    ],
    display: {
        type: String,
        required: true
    },
    return: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Product", productSchema);
