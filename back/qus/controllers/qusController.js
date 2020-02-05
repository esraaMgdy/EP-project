const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const qus = mongoose.model('qus');

router.get('/',(req,res)=>{
    res.render("qus/addoredit", {
        viewTitle: "Create qus"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var qus = new qus();
    qus.subject = req.body.subject;
    qus.author = req.body.author;
    qus.content = req.body.content;
    qus.save((err, doc) => {
        if (!err) {
            res.redirect('qus/list');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("qus/addoredit", {
                    viewTitle: "Create qus",
                    qus: req.body
                });
            }
            else {
                console.log('Error during record insertion : ' + err);
            }
        }
    });
}

function updateRecord(req, res) {
    qus.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('qus/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("qus/addoredit", {
                    viewTitle: 'Update qus',
                    qus: req.body
                });
            }
            else {
                console.log('Error during qus update : ' + err);
            }
        }
    });
}

router.get('/list', (req, res) => {
    qus.find((err, docs) => {
        if (!err) {
            res.render("qus/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving qus list :' + err);
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
    qus.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("qus/addoredit", {
                viewTitle: "Update qus",
                qus: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    qus.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('qus/list'); // The correct ('/qus/list')
        }
        else { console.log('Error in qus delete :' + err); }
    });
});

module.exports = router;