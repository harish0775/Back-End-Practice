 const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Codieal-Development');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error On running Mongoose_db"));

db.once('open', function(){
    console.log('SuccessFully Connect  :: Mongoose-Database');
})

module.exports = db;