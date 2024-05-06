//3.Incorporate the error handling middleware with the previously developed API.

const express = require('express');
const createError = require('http-errors');
const Errorhandler=require('./Middleware/ErrorHandling')

const app = express();

app.use(createError);
app.use(Errorhandler)
app.get('/',(req,res)=>{
    res.send('I am available')
})
app.get('/about',(req,res)=>{
    res.send('I am about')
})
app.get('/user',(req,res)=>{
    res.send('I am user')
})
app.get('/contact',(req,res)=>{
    res.send('I am contact')
})
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})
    
