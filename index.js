var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');
var DB_URI = "mongodb://localhost:27017/portfolio";


var app = express();


app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);

app.use(router);



app.listen(8080,function(){
  console.log("running");
})
