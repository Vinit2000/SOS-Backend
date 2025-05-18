/* Required Schema for the Project
1. Name 
6. Email
7. Password*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        match:/^[\w\s]+$/
    },
    email:{
        type: String,
        required:true,
        unique:true,
        match: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
})

module.exports = mongoose.model('User', userSchema ,'dentalcompany' )


