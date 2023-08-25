const mongoose = require("mongoose");

 const sizeSchema = mongoose.Schema({
         
    name:{type:String,required:true,trim:true,unique:true}
 } ,{timestamps:true});


 module.exports = mongoose.model("size",sizeSchema);