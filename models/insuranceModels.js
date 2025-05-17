/* Required Schema for the Project (Vinit)
1. Patient Name
2. Phone Number
3. Patient ID
4. Reference #
<<<<<<< HEAD
5. Representative Name */

const mongoose = require("mongoose")
/**
* Define Mongoose Schema & Model for the "studentsReg" collection
*/
const insuranceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      match: /^[A-Za-z\s]+$/
      // Allows only letters and spaces
    },
    phone:{
        type: Number,
        required: true,
    },
    id:{
        type: Number,
        required: true,
    },
    reference:{
        type: String,
    },
    repName:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
  }, { collection: 'insuranceforms', versionKey: false }); // Explicitly specifying the collection name in MongoDB
  // Creating a Mongoose model for "insuranceforms" collection
  const Insurance = mongoose.model('Insurance', insuranceSchema, "insuranceforms");
  module.exports = Insurance;
=======
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
>>>>>>> 81343147e952e427fa7195f3ba26b9065927eddd
