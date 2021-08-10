const mongoose = require('mongoose');
const constactschema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    phone :{
        type : String,
        require:true
    }
})

const contact = mongoose.model('contact',constactschema);


module.exports = contact;