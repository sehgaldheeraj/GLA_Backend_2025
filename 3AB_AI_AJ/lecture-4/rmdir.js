let fs=require('fs/promises');
let path= __dirname+'/delete';


fs.rmdir(path).then(()=>{
    console.log("done");
})
.catch((err)=>{
    console.log(err);
})