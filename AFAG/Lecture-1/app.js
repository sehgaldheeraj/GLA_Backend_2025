let express=require('express');
let app=express();
let ejs=require('ejs');
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/dashboard',(req,res)=>{
    res.send("this is a dashboard route ..");    
})
// query params
app.get('/products/:subprod',(req,res)=>{
    console.log(req.params);
    res.send('this is a product route');
})
app.listen(3334,()=>{
    console.log("app is running at port 3334");
});
