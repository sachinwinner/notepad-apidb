const mongoose=require('mongoose');
const noteschema=new mongoose.schema({
                              title:String,
                              content:string

});
const Note=mongoose.model('Note',noteschema);

module.exports=Note;