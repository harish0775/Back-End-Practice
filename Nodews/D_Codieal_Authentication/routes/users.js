const express = require('express');
const router = express.Router();


 const user_controller_router = require('../controllers/user_controllers');
router.post('/create',user_controller_router.create);
router.get('/profile',user_controller_router.profile);
// create Sign_In Controller Through router
router.get('/Sign_In',user_controller_router.Sign_In);
router.get('/Sign_Up',user_controller_router.Sign_Up);


module.exports = router;