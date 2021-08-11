const express = require('express');
const router = express.Router();


 const user_controller_router = require('../controllers/user_controllers');
router.get('/profile',user_controller_router.profile);


// create Sign_In Controller Through router

const Sign_In_controller_router =  require('../controllers/user_controllers');
router.get('/Sign_In',Sign_In_controller_router.Sign_In);

const Sign_Up_controller_router =  require('../controllers/user_controllers');
router.get('/Sign_Up',Sign_Up_controller_router.Sign_Up);



module.exports = router;