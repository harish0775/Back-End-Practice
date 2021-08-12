
const User = require('../models/users')
module.exports.profile  = function(req,res){
    return res.render('users',{
        title : "Profile"
    });
}

//render Sign_In form
module.exports.Sign_In =  function(req,res){
    return res.render('Sign_In',{
        title : "Sign_In _Tittle"
    })
}
//Render Sign-Up form
module.exports.Sign_Up =  function(req,res){
    return res.render('Sign_Up',{
        title : "Sign_Up _Tittle"
    })
}

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/Sign_In');
            })
        }else{
            return res.redirect('back');
        }

    });
}
module.exports.create_session = function(req, res){

    // steps to authenticate
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if (user){

            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }else{
            // handle user not found

            return res.redirect('back');
        }


    });
}