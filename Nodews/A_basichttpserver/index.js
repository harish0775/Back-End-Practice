const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer(requestHandler);

function requestHandler(res,res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'});
    let filepath;
    switch(req.url){
        case'/':
        filepath = "./index.html"
        break;
        case'/profile':
        filepath = "./profile.html"
        break;
        default:
            filepath = "./404.html"
    }

}
fs.readFile(filepath,function(err,data){
    if(err){
        console.log('Error',error);
        return res.end("Error")
    }
    return res.end(data);
});

server.listen(port,function(err){
    if(err){
        console.log("error");
    }
    console.log('Server is Running on port:',port);
})