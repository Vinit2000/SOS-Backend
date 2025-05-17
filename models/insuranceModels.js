/* Required Schema for the Project (Vinit)
1. Patient Name
2. Phone Number
3. Patient ID
4. Reference #
5. Representative Name 
6. Email
7. Password*/

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
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
    patientId:{
        type: String,
        required:true,
        unique:true
    },
    representativeName:{
        type:String,
        match:/^[A-Za-z0-9\s]+$/
    },
    reference:{
        type:String
    },
    phoneNumber:{
        type:String,
        match:/[0-9]{10}$/
    },
})

const Patient = mongoose.model('Patient', patientSchema ,'insuranceforms' )

module.exports = Patient