let fs=require('fs');

let path=__dirname+'/data.txt';

fs.readFile(path,'utf-8',(data,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})