let fs=require('fs/promises');

let path=__dirname+'/data.txt';

fs.appendFile(path,'\n append data using promises')
.then(()=>{
    console.log("done");
})
.catch((err)=>{
    console.log("err");
})