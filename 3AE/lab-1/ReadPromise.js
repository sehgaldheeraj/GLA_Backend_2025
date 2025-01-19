let fs=require('fs/promises');

let path=__dirname+'/abc.txt';


fs.readFile(path,'utf-8')
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})