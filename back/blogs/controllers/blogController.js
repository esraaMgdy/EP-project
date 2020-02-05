const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

router.get('/',(req,res)=>{
    res.render("blog/addoredit", {
        viewTitle: "Create Blog"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var blog = new Blog();
    blog.subject = req.body.subject;
    blog.author = req.body.author;
    blog.content = req.body.content;
    blog.save((err, doc) => {
        if (!err) {
            res.redirect('blog/list');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("blog/addoredit", {
                    viewTitle: "Create Blog",
                    blog: req.body
                });
            }
            else {
                console.log('Error during record insertion : ' + err);
            }
        }
    });
}

function updateRecord(req, res) {
    Blog.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('blog/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("blog/addoredit", {
                    viewTitle: 'Update Blog',
                    blog: req.body
                });
            }
            else {
                console.log('Error during blog update : ' + err);
            }
        }
    });
}

router.get('/list', (req, res) => {
    Blog.find((err, docs) => {
        if (!err) {
            res.render("blog/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving blogs list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'subject':
                body['subjectError'] = err.errors[field].message;
                break;
            case 'author':
                body['authorError'] = err.errors[field].message;
                break;
            case 'content':
                body['contentError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("blog/addoredit", {
                viewTitle: "Update Blog",
                blog: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('blog/list'); // The correct ('/blog/list')
        }
        else { console.log('Error in blog delete :' + err); }
    });
});

module.exports = router;