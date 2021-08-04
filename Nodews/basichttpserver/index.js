const http = require('http');
const port  = 8000;
const fs = require('fs');
function requestHandler(req,res){
    console.log(res.url);
    res.writeHead(200,{'Content-type' : 'text/html'});
    fs.readFile('index.html',function(err,data){
        if(err){
            console.log('Error' ,err);
            return res.end('<h1> Error!</h1>');
        }
        return res.end(data);
    })
  
}
const server = http.createServer(requestHandler);

 server.listen(port,function(err){
     if(err){
         console.log(err);
         return;
     }
     console.log('server Runing on port:',port);
 });