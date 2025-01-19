let fs=require('fs');

let path=__dirname+'/data.txt';
fs.writeFile(path,"learning node js filesystem1",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("done sucessfully");
    }
})