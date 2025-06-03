const Patient = require('../models/insuranceModels');
const FormConfiguration = require('../models/formConfiguration'); // Add this import
require('dotenv').config();

// Your existing functions
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

// New functions for form configuration

exports.saveInsuranceFormConfig = async (req, res) => {
  try {
    const {
      conName,
      conPatientId,
      conRepresentativeName,
      conReference,
      conPhoneNumber
    } = req.body;

    console.log('Received form configuration:', req.body);

    // conName is now a required string identifier (not a checkbox)
    if (!conName || typeof conName !== 'string') {
      return res.status(400).json({
        message: 'conName (string) is required to identify the configuration'
      });
    }

    const configData = {
      conName: conName.trim(),
      conPatientId: !!conPatientId,
      conRepresentativeName: !!conRepresentativeName,
      conReference: !!conReference,
      conPhoneNumber: !!conPhoneNumber
    };

    // Check if configuration exists by name
    let existingConfig = await FormConfiguration.findOne({ conName: configData.conName });

    if (existingConfig) {
      Object.assign(existingConfig, configData);
      await existingConfig.save();

      console.log('Updated existing configuration');
      return res.status(200).json({
        message: 'Form configuration updated successfully',
        data: existingConfig
      });
    } else {
      const newConfig = new FormConfiguration(configData);
      await newConfig.save();

      console.log('Created new configuration');
      return res.status(201).json({
        message: 'Form configuration created successfully',
        data: newConfig
      });
    }
  } catch (error) {
    console.error('Error saving form configuration:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


// Get the global form configuration
exports.getInsuranceFormConfig = async (req, res) => {
  try {
    console.log('Fetching global form configuration');

    const configuration = await FormConfiguration.findOne();

    if (!configuration) {
      return res.status(404).json({
        message: 'No form configuration found'
      });
    }

    console.log('Configuration found:', configuration);
    res.status(200).json(configuration);
  } catch (error) {
    console.error('Error fetching form configuration:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};
