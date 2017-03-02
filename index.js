var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');
var DB_URI = "mongodb://localhost:27017/portfolio";
var session = require('express-session')
var paginate = require('express-paginate');


var app = express();


app.set('view engine', 'ejs');

app.use(session({secret: 'ssshhhhh',maxAge:'3600000'}));

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(__dirname+ '/public'));
app.use('/public',express.static('public'));


mongoose.connect(DB_URI);

app.use(router);



app.listen(8080,function(){
  console.log("running");
})
