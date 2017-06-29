var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function(req, res, next){
    let email = req.body.email;
    let user = new User({
        firstName: 'Oz',
        lastName: 'Salazar',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
