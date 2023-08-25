const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

              name:{type:String,required:true,trim:true},
              email:{type:String,required:true,trim:true},
              password:{type:String,required:true,trim:true},
              active:{type:Boolean,trim:true,required:true,default:false}

} , {timestramps:true})

module.exports = mongoose.model('user',userSchema);