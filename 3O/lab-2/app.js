let express=require('express');
let app=express();
let path=require('path')
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
    
app.get('/login',(req,res)=>{
    console.log(req.query);
    res.render('index');
    // res.send('this is a login route...');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})