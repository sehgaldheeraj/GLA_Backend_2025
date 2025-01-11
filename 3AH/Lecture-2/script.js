let fs=require('fs/promises');

let path=__dirname+'/dat.txt';

fs.writeFile(path,"learning file system using promises")
.then(()=>{
    console.log("done successfully .....");
})
.catch((err)=>{
    console.log(err);
})

 