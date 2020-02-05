const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Load User Model 
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match User
            User.findOne({ email: email })
                .then(user => {
                    if(!user) {
                        return done(null, false, { message: 'That email is not registered '})
                    }

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Password incorrect'})
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )
    
    // attach the user id to the session so we can get it back through the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

      //   get the whole user back when needed
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
            });
        });
}