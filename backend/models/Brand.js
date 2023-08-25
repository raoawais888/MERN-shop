const mongoose = require("mongoose");

  const BrandSchema = mongoose.Schema({
       name:{type:String,required:true,trime:true,unique:true}
  }, { timestamps: true })


  module.exports = mongoose.model('brand',BrandSchema);