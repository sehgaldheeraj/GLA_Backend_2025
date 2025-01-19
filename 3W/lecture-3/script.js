let fs=require('fs');
let path=__dirname+'/data.txt';

fs.appendFile(path,"append data",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("data appended successfully");
    }
})