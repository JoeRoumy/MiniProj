let dataentry = require('./DataB');

let controller = {

insrt: function(req,res){
  let val = new dataentry(req.body);
  val.save(function(err){
    if(err)
    res.send(err);
    else {
      res.redirect('http://www.google.com');
    }
  })
}
,
prnt: function(req,res){
  dataentry.find(function(err,vals){
    if(err)
    res.send(err.message);
    else
      res.redirect('http://www.google.com');
    res.send(vals);
  })
}

}












module.exports = controller;
