let fs=require('fs');

let path=__dirname+'/abc.txt'


fs.appendFile(path,"added data",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("append successfully ..");
    }
})