const express = require('express');
//require Cookies-parser to store User(most visit websites)
const cookie_parser = require('cookie-parser');
const app = express();
const port  = 9000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
const db = require('./config/mongoose');
//Use for Session Cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy')
app.use(express.urlencoded());
app.use(cookie_parser());

app.use(express.static('./assets'));
app.set('layout extractStyles',true);  
app.set('layout extractScripts',true);
//setup views engine
app.set('view engine','ejs');
app.set('views','./views');


// Listen Port

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use('/', require('./routes'));


app.listen(port,function(err){  
    if(err){
        console.log('Error in Running Server',err); 
        // Instate of Use this We Can use bactisks(``)  this we called as interpolation
        console.log(`Error in Running  the Server :${err}`);
    }
    //evalute mathematical expression inside {}
    console.log(`Listen : Server is Running on port: ${port}`);
});