module.exports=middleware=(req,res,next)=>{
    if(!req.query.age){
     next('please provide age')
    }
    else if(req.query.age>=20){
     res.send('you are permitted to do that')
    }
 else{
     next();
 }
}