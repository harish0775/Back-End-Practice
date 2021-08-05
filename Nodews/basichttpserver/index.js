const http = require('http');
const port  = 8000;
const fs = require('fs');
const server = http.createServer(requestHandler);

function requestHandler(req,res){
    console.log(res.url);
    res.writeHead(200,{'Content-type' : 'text/html'});

let filePath;

switch(req.url){
    case'/':
    filePath = './index.html'
    break;
    case'/profile':
    filePath = "./profile.html"
     break;
    default :
       filePath = "./404.html"
}
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err,'error');
        return res.end('<h1> Error!</h1>')
    }
    return res.end(data);
})

} 



 server.listen(port,function(err){
     if(err){
         console.log(err);
         return;
     }
     console.log('server Runing on port:',port);
 });

