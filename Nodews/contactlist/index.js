const express = require('express');
const port = 9000;
const path = require('path');
const app = express();

const db = require('./config/mongoose');
const contact = require('./model/contact')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList =[
  {
      name : "Harish",
      phone : "1111111111"
  },{
      name: "Krish",
      phone : "2222222222"
  },
  {
      name : "Kalpna",
      phone : "333231233"
  },
  {
      name : "Don",
      phone : "9319323123"
  }
]
app.get('/',function(req,res){
    return res.render('home',{title : "My Contact list"});
});
app.get('/practice',function(req,res){
    return res.render('practice',{title : "practice abc title",
    contact_list : contactlist })
})
app.get('/contact',function(req,res){ 
    return res.render('contact',{title : "practice abc title",
    contact_list : contactList })
})
app.get('/form',function(req,res){
    return res.render('Form',{'bg-color' : "red"
}
    )
})
app.post('/create_contact',function(req,res){
    // contactlist.push({
    //     name: req.body.name,
    //     phone : req.body.phone
    // });
    console.log(req.body);
    contactList.push(req.body);

    return res.redirect('back');
})

// app.get('/delete/contact/:phone',function(req,res){    // params perameters
//   console.log(req.params);
//   let phone  = req.params.phone;
// });

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone;

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        
    }
    console.log('Server is Running on Port :',port)
})