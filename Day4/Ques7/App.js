const express=require('express');
const tracker=require('./Tracker')
const app=express();

app.get('/api1',tracker,(req,resp)=>{
    resp.send('see the console to know about API1')
})
app.get('/api2',tracker,(req,resp)=>{
    resp.send('see the console to know about API2')
})
app.get('/api3',tracker,(req,resp)=>{
    resp.send('see the console to know about API3')
})
app.get('/api4',tracker,(req,resp)=>{
    resp.send('see the console to know about API4')
})
app.get('/api5',tracker,(req,resp)=>{
    resp.send('see the console to know about API5')
})
app.listen(7000,()=>{
    console.log('Server is runnning on the port 7000')
})