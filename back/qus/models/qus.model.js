const mongoose = require('mongoose');

const qusSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    tags: { 
        type :[String],
    required: false},
    date: {type:Date , default:Date.now},
    isPublished: Boolean

});

const qus= mongoose.model('qus', qusSchema);


module.exports = qus;