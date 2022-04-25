
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{type:String, required:true},
    city:{type:String, required:true},
    address:{type:String, required:true},
    password:{type:String, required:true},
    capacity:{type:Number, required:true},
    costperday:{type:Number, required:true},
    verified:{type:Boolean, required:true},
    rating:{type:Number, required:true}
},{
   versionKey:false,
   timestamps:true,
});


module.exports =mongoose.model('product', productSchema)