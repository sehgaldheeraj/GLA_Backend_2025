let express=require('express');
let app=express();


app.get('/',(req,res)=>{
    res.send('this is a / route ');
})

app.listen(4444,()=>{
    console.log('app is running at port 4444');
})
