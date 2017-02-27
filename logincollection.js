var mongoose = require('mongoose');


var Schema = mongoose.Schema({
  username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    }

});


var logincollection = mongoose.model("login",Schema);

module.exports = logincollection;
