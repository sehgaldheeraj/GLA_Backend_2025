let fs=require('fs/promises');

let path=__dirname+'/dat.txt';

fs.rm(path)
.then(()=>{
    console.log("remove successfully... ");
})
.catch((err)=>{
    console.log(err);
})