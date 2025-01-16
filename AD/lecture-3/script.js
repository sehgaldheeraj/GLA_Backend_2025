let fs=require('fs');
// console.log(fs);
// let path="C:\Users\Asus tuf\Desktop\GLA-backend\3AD\lecture-3"+"/data.txt"
let path=__dirname+'/data.txt';
console.log(__dirname+'/data.txt');
fs.writeFile(path,"start learning node js file system",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("text written successfully ....");
    }
})