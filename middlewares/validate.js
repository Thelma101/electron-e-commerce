const Joi = require('joi');

const productValidation = Joi.object({
    title: Joi.string().required().message({
        "string.empty": "Product title is required"
    }),
    description: Joi.string().required().message({
        "string.empty": "Product description is required"
    }),
    category: Joi.string().required().message({
        "string.empty": "Product category is required"
    }),
    color: Joi.any().required().message({
        "string.empty": "Product color is required"
    }),
    price: Joi.number().min(0).required().message({
        "number.empty": "Product price is required",
        "number.min": "Product price must be greater than 0",
        "any.required": "Product price is required"
    }),
    stock: Joi.number().min(1).required().message({
        "string.empty": "Product stock is required",
        "number.min": "Product stock must be greater than 1",
        "any.required": " Stock is required"
    })
});

module.exports = { productValidation };

