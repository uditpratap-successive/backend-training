const express=require('express');
const router=express.Router();
const {signup}=require('../controller/controller')
router.post('/signup',signup)
module.exports =router;