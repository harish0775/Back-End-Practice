const express = require('express');
const port = 8000;
const app = express();


app.get('/profile',function(req,res){
    res.send('<H1> Hey! My Express  IS Running.</H1>' )
})
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        
    }
    console.log('Server is Running on Port :',port)
})