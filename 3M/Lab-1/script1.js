let fs =require('fs/promises');

let path=__dirname+'/text.txt';

fs.writeFile(path,"file system using promise")
.then(()=>{
    console.log("done successfully");
})
.catch((err)=>{
    console.log(err);
})