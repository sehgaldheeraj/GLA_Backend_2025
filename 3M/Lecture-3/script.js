let fs=require('fs');

let path=__dirname+'/data.txt';

fs.writeFile(path,"learning nodejs file system",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("done Successfully ...");
    }
})