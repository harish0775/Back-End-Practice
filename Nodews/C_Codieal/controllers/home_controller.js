 
 //module.exports.actionName  = function(req,res)
 // home Send to Router from this file(home_controller)
 module.exports.home = function(req,res){
   return res.render('home',{
      title : "Hello world"
   });
 }
