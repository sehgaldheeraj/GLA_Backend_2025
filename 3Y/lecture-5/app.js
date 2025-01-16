let express=require('express');
let app=express();

app.get('/home',(req,res)=>{
    res.send('this is a home route');
})

app.get('/dashboard',(req,res)=>{
    res.send('this is a dashboard route');
})

app.get('/login',(req,res)=>{
    res.send('this is a login route');
})
app.get('/logout',(req,res)=>{
    res.send('this is a logout route');
})

// /dashboard
// login , logout

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})


// http://localhost:3000/home