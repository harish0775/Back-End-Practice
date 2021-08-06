const express = require('express');
const port = 8000;
const path = require('path');
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname ,'views'));
app.get('/profile',function(req,res){
    return res.render('home',{title : "My Contact list"});
});
app.get('/practice',function(req,res){
    return res.render('practice',{title : "practice title" })
})
app.get('/form',function(req,res){
    return res.render('Form',{title : "<title>title</title>"})
})

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        
    }
    console.log('Server is Running on Port :',port)
})