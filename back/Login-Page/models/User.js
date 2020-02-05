const mongoose = require('mongoose')
const _ = require('underscore') 
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passowrd: {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    date: {
        type: String,
        required: Date.now
    },
})

const User = module.exports = mongoose.model('User', UserSchema);

module.exports = {
    User
}