//Estabilish a create api..
const express=require('express');
require('./config');
const collection=require('./Schema');
const app=express();
app.use(express.json());
app.get('/fetch',async(req,resp)=>{
    try{
        let data=await collection.find()
        resp.send(data);

    }
    catch{
        res.status(404).send('there is internal issue')
    }
})

app.post('/postdata',async(req,res)=>{
    try{
        let data=await collection.create(req.body)
        res.send(data)
    }
    catch(error){
        console.log('error has been caught ')
        res.status(500).send(error.message)
    }

})

app.listen(4000,()=>{
    console.log(`Server is running on port on 4000`)
})