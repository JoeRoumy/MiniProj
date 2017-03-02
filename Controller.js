let profilecollection = require('./profilecollection');



let controller = {

login: function(req,res){
  profilecollection.find({"username": req.body.Username, "password": req.body.Pass},function(err,vals){
    if(err)
    res.send(err.message);
    else
    if(vals.length!=0){
      req.session.username=req.body.Username;
      req.session.works=vals[0].works;
      res.render('profile',{session:req.session});//succesful login
    }
    else {
        res.render('index',{"wrongcredentials":1});
      }
  })
}
,
signup:function(req,res){
  if(req.body.Pass&&req.body.Username){
  if(req.body.Pass==req.body.Pass2){
    let newuser = new profilecollection({"username": req.body.Username, "password": req.body.Pass});
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
  }}
  else {
    res.render('signup',{"wrongcredentials":4});
  }
}
,
createprofile:function(req,res){
profilecollection.find({"username": req.session.username},function(err,vals) {
if(err){

}else{
  if(req.session.works.length==0){
  vals[0].name=req.body.Name;
  if(req.files.length>0)vals[0].profilepic=req.files[0].path;
  if(req.files.length>1){
  vals[0].works.push({
    "workname": req.body.workname,
    "resource": req.files[1].path,
    "ispic":"1"
  });}
  else{
    vals[0].works.push({
      "workname": req.body.workname,
      "resource": req.body.Link,
      "ispic":"0"
    });
  }
}else {
  if(req.files.length>0){
  vals[0].works.push({
    "workname": req.body.workname,
    "resource": req.files[0].path,
    "ispic":"1"
  });}
  else{
    vals[0].works.push({
      "workname": req.body.workname,
      "resource": req.body.Link,
      "ispic":"0"
    });
  }
}
vals[0].save(function(err){
  if(err)console.log(err);
  else {
    req.session.works=vals[0].works;
    res.render('profile',{"session":req.session});
  }
})

}
});
}
,
viewsummary:function(req,res){
profilecollection.paginate({},{page:req.session.thispage, limit:10},function(err,result){
  if(err){
    res.send(err);
    }
    else{
      res.render('summary',{profiles:result,endofresults:(10*req.session.thispage>=result.total)});
    }
});


}








}













module.exports = controller;
