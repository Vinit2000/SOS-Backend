const Patient = require('../models/insuranceModels');
require('dotenv').config();

exports.getInsuranceForm = async (req, res) => {
  try {
    const { name } = req.query;
    let filter = {};
    if (name) filter.name = new RegExp(name, "i");
    
    const insuranceForms = await Patient.find(filter);
    res.json(insuranceForms);
  } catch (error) {
    console.error("Error getting insurance forms:", error);
    res.status(500).json({ message: "Error getting insurance forms" });
  }
};

exports.addInsuranceForm = async (req, res) => {
  try {
    const { name, patientId, representativeName, reference, phoneNumber } = req.body;
    if (!name || !patientId || !representativeName || !reference || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

   // Check for existing patient using patientId only (more efficient)
    const existingPatient = await Patient.exists({ patientId });
    if (existingPatient) {
      return res.status(409).json({ 
        success: false,
        message: 'Patient ID already in use',
        field: 'patientId'
      });
    }

    const newInsuranceForm = new Patient({ name, patientId, reference, representativeName, phoneNumber });
    await newInsuranceForm.save();
    
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
};
