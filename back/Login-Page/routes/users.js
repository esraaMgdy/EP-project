const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')
const async = require("async");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// User model
const User = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

//Forgot Password Page
router.get('/forgot', (req, res) => res.render('forgot'));

// Register Handle
router.post('/register', (req, res) => {
    const {name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if(password !== password2) {
        errors.push({ msg: 'Passwords do not match'});
    }

    // Check pass length
    if(password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 charcters'});
    }


    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }else {
        // Validation passed 
        User.findOne({ email : email })
            .then(user => {
                if(user) {
                    // User exists
                    errors.push({ msg: 'Email is already registered'})
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    })
                }else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    })

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw(err);
                            // Set password hashed
                            newUser.password = hash;
                            // Save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in')
                                    res.redirect('/users/login')
                            })
                            .catch(err => console.log(err))
                    }))   
                }
            });
    }
})

// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

// Logout Handle
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/user/login')
})

// User Profile
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, fonudUser) => {
        if(err) {
            req.flash("error", "Something went wrong.")
            res.redirect('/')
        }
        res.render('users/show', {user: foundUser})
    })
})


// Forgot Handle
router.post('/forgot', (req, res, next) => {
    async.waterfall([
        (done) => {
            crypto.randomBytes(20, (err, buf) => {
                let token = buf.toString('hex');
                done(err, token);
            })
        },
        (token, done) => {
            User.findOne({ email : email }, (err, user) => {
                if(!user) {
                    req.flash('error', 'No account with that email address exists.')
                    return res.redirect('/users/forgot')
                }
                user.resetPasswordToken = token
                user.resetPasswordExpires = Date.now() + 3600000 // 1hour

                user.save( (err) => {
                    done(err, token, user)
                })
            })
        },
        (token, user, done) => {
            let smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'appforpoints@gmail.com', // Example Mail
                    pass: process.env.GMAILPW // put gmail password in env Ex: turn on teminal write export GMAILPW=yourpassword and enter
                }
            })
            let mailOptions = {
                to: user.email,
                from: 'appforpoints@gmail.com',
                subject: 'Password Reset',
                text:  'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, (err) => {
                console.log('mail sent');
                req.flash('success', 'An e-mail has been sent to' + user.email + 'with further instructions.')
                done(err, 'done')
            })
        }
    ], (err) => {
        if(err) return next(err)
        res.redirect('/users/forgot')
    })
})

router.get('/reset/:token', (req, res) => {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}, (err, user) => {
        if (!user) {
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/users/forgot')
        }
        res.render('reset', {token: req.params.token})
    })
})

router.post('/reset/:token', (req, res) => {
    async.waterfall([
        (done) => {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, (err, user) => {
            if (!user) {
                req.flash('error', 'Password reset token is invalid or has expired.')
                return res.redirect('back')
            }
            if(req.body.password === req.body.confirm) {
                user.setPassword(req.body.password, (err) => {
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;

                    user.save(function(err) {
                        req.logIn(user, (err) => {
                        done(err, user);
                        });
                    });
                })
            } else {
                req.flash("error", "Passwords do not match.")
                return res.redirect('back')
            }
        })
    },
    (user, done) => {
        nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'appforpoints@gmail.com', // Example Mail
                pass: process.env.GMAILPW // put gmail password in env Ex: turn on teminal write export GMAILPW=yourpassword and enter
            }
        });
        mailOptions = {
            to: user.email,
            from: 'appforpoints@gmail.com',
            subject: 'Password Reset',
            text: 'Hello,\n\n' +
            'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
        }
        smtpTransport.sendMail(mailOptions, (err) => {
            req.flash('success', 'Success! Your password has been changed.');
            done(err);
        });
    }
    ], 
    (err) => {
        res.redirect('/');
    });
});

module.exports = router;