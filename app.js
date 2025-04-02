const { configDotenv } = require('dotenv');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
configDotenv();
const mongoose = require('mongoose');
const path = require('path');
const generalRoutes = require('./routes/general');
const accountRoutes = require('./routes/account');
// const productRoutes = require('./routes/product'); 
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');


const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Hurray! Connected to MongoDB');
    })
    .catch((err) => console.log(err));

// template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

// Set up view engine (Handlebars)
// app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', generalRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', accountRoutes);
app.use('/admin', adminRoutes)


// Routes
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index3.html'))
    res.render('index')
});

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index3.html'))
    res.render('about-us')
});

app.get('/contact', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index3.html'))
    res.render('contact-us')
});

// 404 Route
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Application Server is running on port ${PORT}`);
});