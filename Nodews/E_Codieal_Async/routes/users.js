const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/user_controllers');

router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
router.post('/update/:id', passport.checkAuthentication, usersController.update);

router.get('/Sign_Up', usersController.Sign_Up);
router.get('/Sign_In', usersController.Sign_In);

router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session/', passport.authenticate(
    'local',
    {failureRedirect: '/users/Sign_In'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);

module.exports = router;