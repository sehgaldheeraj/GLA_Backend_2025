let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send("this is a / route ");
})

app.get('/product/:data',(req,res)=>{
    console.log(req.params);
    res.send('this is a product route');
})



app.listen(3000,()=>{
    console.log("app is running at port 3000");
})


// http://localhost:4444/product/13123