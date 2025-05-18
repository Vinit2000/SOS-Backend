/* Required Schema for the Project
1. Name 
6. Email
7. Password*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        match: /^[A-Za-z\s]+$/
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true,
        match: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
},{versionKey: false})

const User = mongoose.model('User', userSchema ,'dentalforms' )

module.exports = User;
