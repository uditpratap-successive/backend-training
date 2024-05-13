const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name:String,
    password:String
})

const collection=mongoose.model('userdetails',userschema);
module.exports=collection