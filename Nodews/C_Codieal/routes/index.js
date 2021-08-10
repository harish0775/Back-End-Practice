const express = require('express');
const router = express.Router();


// receive the home_controller.
const home_controller_router = require('../controllers/home_controller');
  // get file with there controller_router.actionName(home).

 router.get('/',home_controller_router.home);


console.log("My router is  Running fine");

module.exports = router;