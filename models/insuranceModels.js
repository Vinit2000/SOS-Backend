/* Required Schema for the Project (Vinit)
1. Patient Name
2. Phone Number
3. Patient ID
4. Reference #
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