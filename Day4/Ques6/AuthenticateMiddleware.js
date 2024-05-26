const jwt=require('jsonwebtoken')

const Authenticater=(req,resp,next)=>{
    const token=req.header('authorization')
    if(typeof token!=undefined){
        
   const decoded = jwt.verify(token, 'secret-key');
   req.data=decoded;
   next();
   }
    else{
        resp.send({error:'Invalid token'})
    } 
}
module.exports=Authenticater;

