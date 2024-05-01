//Develop an authentication middleware using a JWT dummy token.
const express=require('express')
const login=require('./Routes/Login')
const privatedata=require('./Routes/ProtectedData')
const app=express();
app.use('/',login);
app.use('/',privatedata)
app.listen(6000,()=>{
    console.log('server is running on port 6000')
})