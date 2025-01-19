let fs=require('fs/promises');
let path=__dirname+'/abc.txt';
fs.appendFile(path,"\n append data using filesystem promises")
.then(()=>{
    console.log("data appended successfully ..");
})
.catch((err)=>{
    console.log(err);
})