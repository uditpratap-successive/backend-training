//9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.
const tracker=(req,res,next)=>{
const timestamp=new Date().toISOString();
console.log(`${timestamp} ${req.method} ${req.url}`)
next();
}
module.exports=tracker;