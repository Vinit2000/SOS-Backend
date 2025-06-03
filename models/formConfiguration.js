const mongoose = require('mongoose');

const formConfigurationSchema = new mongoose.Schema({
  name: {
    type: String,
    match: /^[A-Za-z\s]+$/
  },
  patientId: {
    type: String,
    unique: true,
    match: /^[0-9]+$/
  },
  representativeName: {
    type: String,
    match: /^[A-Za-z\s]+$/,
  },
  reference: {
    type: String, // Change from Number if alphanumeric
    match: /^[A-Za-z0-9\-]*$/,
  },
  phoneNumber: {
    type: String,
    match: /^\d{10}$/,
  }
}, {
  versionKey: false,
  strict: 'throw',
  timestamps: true // Optional
});

// Create compound index to ensure unique configuration per office
formConfigurationSchema.index({ officeId: 1 }, { unique: true });

const FormConfiguration = mongoose.model('FormConfiguration', formConfigurationSchema, "formconfiguration");

module.exports = FormConfiguration;