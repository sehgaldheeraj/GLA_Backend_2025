let fs=require('fs');
// let path="C:\Users\Asus tuf\Desktop\GLA-backend\3AH\lecture-2"+'/data.txt'
let path=__dirname+'/data.txt';
console.log(path);
fs.writeFile(path,"learning node js filesystem",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("done successfully .....");
    }
})