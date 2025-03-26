const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    firstname: { 
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "http://localhost:5008/profile/electron.jpg"
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Account', accountSchema);