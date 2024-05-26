const express=require('express');
const errorhandler=require('./Errorhandler');
const middleware = require('./Middleware');
const app=express();

app.use(middleware);
app.get('/api1',(req,resp)=>{
    resp.send('This API is free from error ')
})
app.get('/api2',(req,resp)=>{
    resp.send('this api is free from the error')
})
app.get('/api3',(req,resp)=>{
    resp.send('this api is free from the error')
})
app.get('/api4',(req,resp)=>{
    resp.send('this api is free from the error')
})
app.get('/api5',(req,resp)=>{
    resp.send('this api is free from the error')
})
app.use(errorhandler);
app.listen(8000,()=>{
    console.log('Server is runnning on the port 8000')
})