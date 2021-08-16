const mongoose = require('mongoose');

mongoose.commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
  //content Belongs to user
    user :{
               type : mongoose.Schema.Type.ObjectId,
               ref : 'User'
    }
    , 
    post :{
        type : mongoose.Schema.Type.ObjectId,
               ref : 'User'
    }
}
,{
    timestamps : true
});  

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;