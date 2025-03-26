const bcrypt = require('bcryptjs');
const Auth = require('../models/auth');

const saltRounds = 10;

const getLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password is required' });
    }
    const user = await Auth.findOne({ email, password });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    } else {
        return res.status(200).json({ message: 'Login successful' });
    }
};

const getRegister = async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body;
    if (!firstname || !lastname || !email || !phone || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const user = await Auth.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    } else {
        const hashPassword = async (password) => {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        }
        const newUser = new User({ firstname, lastname, email, phone, password: hashPassword });
        await newUser.save();
        return res.status(200).json({ message: 'User registered successfully' });
    }
};

module.exports = {
    getLogin,
    getRegister
}