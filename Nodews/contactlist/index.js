const express = require('express');
const port = 8000;
const path = require('path');
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname ,'views'));
app.get('/profile',function(req,res){
    return res.render('home',{title : "My Contact list"});
});
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        
    }
    console.log('Server is Running on Port :',port)
})