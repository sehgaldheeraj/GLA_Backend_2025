let express=require('express');
let app=express();

app.get('/home',(req,res)=>{
    console.log(req.query);
    res.send('home route');
})


app.listen(3000,()=>{
    console.log('app is running at port 3000');
})