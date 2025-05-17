/* Required Schema for the Project
1. Patient Name
2. Phone Number
3. Patient ID
4. Reference #
5. Representative Name*/

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        match:/^[\w\s]+$/
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
