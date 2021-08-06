const express = require('express');
const port = 9000;
const path = require('path');
const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname ,'views'));

var contactlist=[
  {
      name : "Haris",
      phone : "931913910"
  },{
      name: "Krish",
      phone : "00001"
  },
  {
      name : "Kalpna",
      phone : "11111"
  },
  {
      name : "Don",
      phone : "2309209300"
  }
]
app.get('/profile',function(req,res){
    return res.render('home',{title : "My Contact list"});
});
app.get('/practice',function(req,res){
    return res.render('practice',{title : "practice abc title",
    contact_list : contactlist })
})
app.get('/form',function(req,res){
    return res.render('Form',{'bg-color' : "red"
}
    )
})
app.post('/create_contact',function(req,res){
    return res.redirect('/form')
})

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        
    }
    console.log('Server is Running on Port :',port)
})