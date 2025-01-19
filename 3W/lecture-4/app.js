let express=require('express');

let app=express();


app.get('/home',(req,res)=>{
    res.send('this is a home route');
})

// //login , logout , dashboard 


app.get('/products/:data',(req,res)=>{
    res.send('this is a product route');
})


app.listen(3000,()=>{
    console.log("App is running at port 3000");    
})

// http://localhost:3000