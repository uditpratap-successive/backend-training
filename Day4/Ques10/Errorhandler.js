//10. Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.
const errorhandler=(err,req,resp,next)=>{
    if(err){
        console.log('error is caught')
        resp.status(500).send({error:'Something went wrong internally'})
    }
    next();
}
module.exports=errorhandler;