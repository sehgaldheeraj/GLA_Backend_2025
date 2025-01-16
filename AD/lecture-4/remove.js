let fs=require('fs/promises');

let path=__dirname+'/data.txt';
fs.rm(path)
.then(()=>{
    console.log("removed successfully ..");
})
.catch((err)=>{
    console.log(err);
})