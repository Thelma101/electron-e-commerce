// const bycrypt = require('bycrytjs');
const Account = require('../models/account');

const getProfile = async (req, res) => {
try {
    res.render('profile', {
        title: 'Profile',
        user: req.user
    });
} catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
    stack: stack.error
}
}

module.exports = { getProfile }