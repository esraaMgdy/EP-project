const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogsDB',{useNewUrlParser: true},
(err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.');}
    else { console.log('Error in DB connection : ' + err);}});
    //mongoose.set('useFindAndModify',false);

const employee = require('./blog.model');