let fs=require('fs/promises');

let path=__dirname+'/p.txt';

fs.writeFile(path,"learn write fun in node js using promises")
.then(()=>{
    console.log("complete");
})

.catch((err)=>{
    console.log(err);
})