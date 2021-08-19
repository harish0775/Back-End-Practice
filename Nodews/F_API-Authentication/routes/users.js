const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
router.post('/update/:id', passport.checkAuthentication, usersController.update);

router.get('/Sign_Up', usersController.SignUp);
router.get('/Sign_In', usersController.SignIn);

router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session/', passport.authenticate(
    'local',
    {failureRedirect: '/users/Sign_In'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersController.createSession);



module.exports = router;