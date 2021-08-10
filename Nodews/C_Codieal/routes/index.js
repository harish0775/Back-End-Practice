const express = require('express');
const router = express.Router();


// receive the home_controller.
const home_controller_router = require('../controllers/home_controller');
  // get file with there controller_router.actionName(home).


  // this is Home Landing Router
 router.get('/',home_controller_router.home);

  // if Any Request Regards another Like users/Profile , users/ Comments , User/Account 
   //  this all r Handle  another router(file)-> users.js 
   // home Page Redirect to user.js Router  followed By   ( / Users)
   // Redirect to another Router to use ( router.use(./'users(use in http)',require('./users(redirect file name))));
 router.use('/users',require('./users'));

console.log("My router is  Running fine");

module.exports = router;