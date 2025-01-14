let fs=require('fs/promises')

let path=__dirname+'/abc.txt';


fs.writeFile(path,'file content using promises')
.then((data) => {
    console.log(data);   
}).catch((err) => {
    console.log(err);
});