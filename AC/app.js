let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send('This is a / route');
})


app.listen(3000,()=>{
    console.log('server started at port 3000');
})


// http://localhost:3000/