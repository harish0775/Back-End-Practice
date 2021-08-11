 
 //here we Render Page(home.ejs) instate of end(res.end).
 module.exports.home = function(req,res){
   return res.render('home',{
      title : "Hello world"
   });
 }
