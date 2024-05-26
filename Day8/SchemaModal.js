const mongoose=require('mongoose');
const countryschema=new mongoose.Schema({
    country:String,
    state:Number
})
const collection=mongoose.model('countries',countryschema);
module.exports=collection;