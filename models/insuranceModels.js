const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: /^[\w\s]+$/
    },
    patientId: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]+$/
    },
    representativeName: {
        type: String,
        match: /^[A-Za-z0-9\s]+$/
    },
    reference: {
        type: String
    },
    phoneNumber: {
        type: String,
        match: /[0-9]{10}$/
    },
}, { 
    versionKey: false,
    // Explicitly prevent adding email field
    strict: 'throw'
});

// Create index only on patientId
patientSchema.index({ patientId: 1 }, { unique: true });

module.exports = mongoose.model('Patient', patientSchema, 'insuranceforms');