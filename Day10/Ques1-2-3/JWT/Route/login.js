const express=require('express');
const router=express.Router();
const {login}=require('../controller/controller')

router.post('/login',login)

module.exports=router;