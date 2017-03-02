var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var Schema = mongoose.Schema({
  username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    },
      name:String,
      profilepic: String,
      works: [{
        workname: {type:String,required:true},
        resource: String,
        ispic:Number
      }]

});
Schema.plugin(mongoosePaginate);


var profilecollection = mongoose.model("userprofile2",Schema);

module.exports = profilecollection;
