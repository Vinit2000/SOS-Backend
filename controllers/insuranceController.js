const Insurance=require('../models/insuranceModels');
const bcrypt=require('bcryptjs');
require('dotenv').config();

exports.getInsuranceForm = async (req, res) => {
  try {
    const { name } = req.query;
    let filter = {};
    if (name) filter.name = new RegExp(name, "i");
    
    const insuranceForms = await Insurance.find(filter);
    res.json(insuranceForms);
  } catch (error) {
    console.error("Error getting insurance forms:", error);
    res.status(500).json({ message: "Error getting insurance forms" });
  }
};

exports.addInsuranceForm = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingForm = await Insurance.findOne({ phone });
    if (existingForm) {
      return res.status(400).json({ message: 'Phone No. already is use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newInsuranceForm = new Student({ name, email, password: hashedPassword });
    await newInsuranceForm.save();
    
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
};