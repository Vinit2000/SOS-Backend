// models/patientModel.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Patient name is required'],
        trim: true,
        match: [/^[A-Za-z\s]+$/, 'Invalid characters in name']
    },
    patientId: {
        type: String,
        required: [true, 'Patient ID is required'],
        trim: true,
    },
    representativeName: {
        type: String,
        trim: true,
        match: [/^[A-Za-z0-9\s]+$/, 'Invalid characters in representative name']
    },
    reference: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
    },
}, { versionKey: false, collection: 'insuranceforms' });

// Add index explicitly
patientSchema.index({ patientId: 1 }, { unique: true });

module.exports = mongoose.model('Patient', patientSchema);