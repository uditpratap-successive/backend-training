const express=require('express')
const app=express();
const Authenticater=require('../AuthenticateMiddleware')
const router=express.Router();

router.post('/data',Authenticater,(req,resp)=>{
    resp.send(req.data);   
})
module.exports=router;
