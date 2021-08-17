const Post = require('../models/post');
const User = require('../models/users');



module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        // is this correct code, could u pls rematch it 
        //okay
        
        User.find({}, function(err, users){
            console.log("posts-->", posts); 
            console.log("users-->", users); 
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
        });

       
    })

}

// module.exports.actionName = function(req, res){}