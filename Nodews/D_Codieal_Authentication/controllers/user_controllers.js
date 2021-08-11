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