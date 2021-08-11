const express = require('express');
const router = express.Router();


 const user_controller_router = require('../controllers/user_controllers');
router.get('/profile',user_controller_router.profile);
module.exports = router;