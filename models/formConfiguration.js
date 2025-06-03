const mongoose = require('mongoose');

const formConfigurationSchema = new mongoose.Schema({
  conName: {
    type: String,
    required: true,
    unique: true
  },
  conPatientId: {
    type: Boolean,
    required: true,
    default: false
  },
  conRepresentativeName: {
    type: Boolean,
    required: true,
    default: false
  },
  conReference: {
    type: Boolean,
    required: true,
    default: false
  },
  conPhoneNumber: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  versionKey: false,
  strict: 'throw',
  timestamps: true
});

const FormConfiguration = mongoose.model('FormConfiguration', formConfigurationSchema, "formconfiguration");

module.exports = FormConfiguration;
