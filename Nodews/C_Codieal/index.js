const express = require('express');
const app = express();
const port  = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

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