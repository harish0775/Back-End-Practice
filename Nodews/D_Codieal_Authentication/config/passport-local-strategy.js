const passport = require('passport');
const user = require('../models/users');
const localSt
const User = Require('../models/users');
passport.use(new localStrategy)({
    usernameField : 'email'
},{
    function(email,password,done){
        User.findOne({email :email},function(err,done){
            if(err){
                console.log('Error in Finding User');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid User Password');
                return done(null,false);
            }
            return done(null ,user);
        })
    }
});

//Serialize the User Id(Encrypted form) then send Back to the browser
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//when browser Request deserialie the User
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in Fiding User in database');
            return done(null,err);
        }
        return done(null,user)
    })
})



module.exports = passport;