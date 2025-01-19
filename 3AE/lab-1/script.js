let fs=require('fs');
let path=__dirname+'/data.txt';
console.log(path);
fs.writeFile(path,"learning node js writefile",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("done successfully ...");
    }
})