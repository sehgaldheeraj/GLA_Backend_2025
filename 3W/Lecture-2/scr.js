let fs=require('fs'); 

let path=__dirname+'/dat.txt';
fs.readFile(path,(data,err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
        console.log('read successfully..');
    }
})