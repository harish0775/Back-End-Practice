   //requie the libary
 const mongoose = require('mongoose');
 
 //connect to database
 mongoose.connect('mongodb://localhost/contact-list-db');
       
 //acquie the connection (to check if it's check)
 const db = mongoose.connection;

 //error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});

