let express=require('express');
let app=express();

let path=require('path');
app.use(express.static(path.join(__dirname,'public')));

app.post('/login',(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})