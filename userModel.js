const mongoose= require('mongoose');

const userScheme = new mongoose.Schema({
    name:String,
    phoneNumber:Number,
    roll:String
});

const User=mongoose.model('User',userScheme);

module.exports=User;