let logincollection = require('./logincollection');

let controller = {

login: function(req,res){
  logincollection.find({"username": req.body.Username, "password": req.body.Pass},function(err,vals){
    if(err)
    res.send(err.message);
    else
    if(vals.length!=0)
      res.render('profile',{User:req.body.Username,projects:[]});//succesful login
      else {
        res.render('index',{"wrongcredentials":1});
      }
  })
}
,
signup:function(req,res){
  if(req.body.Pass==req.body.Pass2){
    let newuser = new logincollection({"username": req.body.Username, "password": req.body.Pass});
    newuser.save(function(err){
      if(err)
      res.render('signup',{"wrongcredentials":1});
      else {
        res.render('signup',{"wrongcredentials":2});
      }
    });
    }
  else{
    res.render('signup',{"wrongcredentials":3});
  }
}
}













module.exports = controller;
