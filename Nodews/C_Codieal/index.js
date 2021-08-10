const express = require('express');
const app = express();
const port  = 8000;

app.listen(port,function(err){
    if(err){
        console.log('Error in Running Server',err); 
        // Instate of Use this We Can use bactisks(``)  this we called as interpolation
        console.log(`Error in Running  the Server :${err}`);
    }
    //evalute mathematical expression inside {}
    console.log(`Server is Running on port: ${2+9}`);
    console.log(`Server is Running on port: ${port}`);
});