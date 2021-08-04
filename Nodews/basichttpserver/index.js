const http = require('http');
const port  = 3000;
function requestHandler(req,res){
    console.log(res.url);
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.end('<h1> Harish</h1>');
}
const server = http.createServer(requestHandler);

 server.listen(port,function(err){
     if(err){
         console.log(err);
         return;
     }
     console.log('server Runing on port:',port);
 });