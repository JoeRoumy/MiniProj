var express = require('express');
var router = express.Router();
var controller = require('./Controller');
var multer = require('multer');
var upload = multer({dest: 'public/uploads'});



router.get('/add',function(req,res) {
  if(req.session.works){
    res.render('add',{session:req.session});
  }
  else{
    res.send(400);
  }
});
router.post('/add',upload.any(),controller.createprofile);//input type file//enctype=multipatr/form-data


router.get('/',function(req,res){res.render('index',{"wrongcredentials":0});});
router.post('/',controller.login);


router.get('/signup',function(req,res){res.render('signup',{"wrongcredentials":0});});
router.post('/signup',controller.signup);

router.get('/summary',function(req,res){req.session.thispage=1; controller.viewsummary(req,res);});
router.post('/summary',function(req,res){req.session.thispage=req.body.gotopage; controller.viewsummary(req,res);});


module.exports = router;
