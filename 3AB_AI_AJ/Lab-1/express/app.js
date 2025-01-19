let express=require('express');
let app=express();

app.get('/abc',(req,res)=>{
    res.send("this is a abc route ");
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})