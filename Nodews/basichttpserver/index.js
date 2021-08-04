const http = require('http');
const port  = 8000;
function requestHandler(req,res){
    console.log(res.url);
    res.end('Harish Nishad');
}
const server = http.createServer(requestHandler);

 server.listen(port,function(err){
     if(err){
         console.log(err);
         return;
     }
     console.log('server Runing on port:',port);
 });