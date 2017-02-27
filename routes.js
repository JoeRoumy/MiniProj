var express = require('express');
var router = express.Router();
var controller = require('./Controller');

router.get('/',function(req,res){res.render('index',{"wrongcredentials":0});});
router.post('/',controller.login);


router.get('/signup',function(req,res){res.render('signup',{"wrongcredentials":0});});
router.post('/signup',controller.signup);


router.get('/add/:i',function(req,res){res.render('add',{"oldprofile":req.params.i});});


module.exports = router;
