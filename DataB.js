var mongoose = require('mongoose');


var Schema = mongoose.Schema({
  title:{
        type:String,
        required:true,
        unique:true
    },
    URL:String

});


var DataB = mongoose.model("test",Schema);

module.exports = DataB;
