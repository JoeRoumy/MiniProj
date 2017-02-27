var mongoose = require('mongoose');


var Schema = mongoose.Schema({

    thing:{
      type:String,
      required:true
    }

});


var profilecolletion = mongoose.model("login",Schema);

module.exports = profilecollection;
