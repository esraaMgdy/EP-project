const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const app = express();

// Passport config
require('./config/passport')(passport)

// DB Config
// const db = require('./config/keys').MongoURI
const db = mongoose.connection

// Connect to Mongo
mongoose.connect('mongodb://localhost/profile', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected.. . '))
    .catch(err => console.log(err));

// ejs
app.use(expressLayouts)
app.set('view engine', 'ejs');

// Bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Express session 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Init Passport 
app.use(passport.initialize());
app.use(passport.session());

// app.use('/dashboard', dashboard)
app.use('/users', require('./routes/users'))

// Connect flash
app.use(flash())

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

// Routes 
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`Server Started on port ${PORT}`));