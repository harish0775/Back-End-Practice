const express = require('express');
//require Cookies-parser to store User(most visit websites)
const cookie_parser = require('cookie-parser');
const app = express();
const port  = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookie_parser());

app.use(express.static('./assets'));
app.set('layout extractStyles',true);  
app.set('layout extractScripts',true);
//setup views engine
app.set('view engine','ejs');
app.set('views','./views');

//redirect from Router 
app.use('/',require('./routes'));

// Listen Port
app.listen(port,function(err){  
    if(err){
        console.log('Error in Running Server',err); 
        // Instate of Use this We Can use bactisks(``)  this we called as interpolation
        console.log(`Error in Running  the Server :${err}`);
    }
    //evalute mathematical expression inside {}
    console.log(`Listen : Server is Running on port: ${port}`);
});