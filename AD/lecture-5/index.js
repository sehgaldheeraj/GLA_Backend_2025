let express=require('express');
let app=express();

app.get('/product/:abc',(req,res)=>{
    console.log(req.params);
    res.send("this is a product route")
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})