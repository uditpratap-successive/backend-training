
const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>value.length>2,
            message:'Title must be at least 3 characters long'
        }

    },
    age:Number,
    position:String
})

const collection=mongoose.model('users',userschema);
module.exports=collection;


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: {
//       type: String,
//       required: true,
//       validate: {
//         validator: (value) => value.length > 2,
//         message: 'Title must be at least 3 characters long'
//       }
//     },
//     author: {
//         type: String,
//         required: true,
//         validate: {
//           validator: (value) => value.length > 2,
//           message: 'Author must be at least 3 characters long'
//         }
//       },
//       year: {
//         type: Number,
//         required: true,
       
//       },
    
//   });