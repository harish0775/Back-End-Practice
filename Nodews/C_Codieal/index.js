const express = require('express');
const app = express();
const port  = 8000;


app.use('/',require('./routes'));
app.listen(port,function(err){  // I push on git this folder still show green
    if(err){
        console.log('Error in Running Server',err); 
        // Instate of Use this We Can use bactisks(``)  this we called as interpolation
        console.log(`Error in Running  the Server :${err}`);
    }
    //evalute mathematical expression inside {}
    console.log(`Listen : Server is Running on port: ${port}`);
});