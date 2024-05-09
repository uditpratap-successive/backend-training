const express = require('express')
const {rateLimitMiddleware} =require('./RatelimitMiddleware')
const app = express();
app.use(express.json())
app.get('/custom',rateLimitMiddleware,(req,res)=>{
    res.send("hello world");
  })
  app.listen(4000,()=>{
    console.log("server running at 000")
  });
