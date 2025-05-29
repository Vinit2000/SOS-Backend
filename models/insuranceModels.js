const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/
  },
  patientId: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]+$/
  },
  representativeName: {
    type: String,
    match: /^[A-Za-z\s]+$/,
    required: false
  },
  reference: {
    type: String, // Change from Number if alphanumeric
    match: /^[A-Za-z0-9\-]*$/,
    required: false
  },
  phoneNumber: {
    type: String,
    match: /^\d{10}$/,
    required: false
  }
}, {
  versionKey: false,
  strict: 'throw',
  timestamps: true // Optional
});

// Ensure uniqueness in DB
patientSchema.index({ patientId: 1 }, { unique: true });

<<<<<<< HEAD
module.exports = mongoose.model('Patient', patientSchema, 'insuranceforms');
=======
const Patient=mongoose.model("Patient",patientSchema,"insuranceforms");

module.exports = Patient;
>>>>>>> 7740c5d7cd73a220c44fe4c2145ff9fad3b66023
