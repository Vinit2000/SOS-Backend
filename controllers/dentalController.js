const User = require('../models/dentalModel');
const bcrypt=require('bcryptjs');
require('dotenv').config();

exports.getDentalForm = async (req, res) => {
  try {
    const { name } = req.query;
    let filter = {};
    if (name) filter.name = new RegExp(name, "i");
    
    const dentalForms = await User.find(filter);
    res.json(dentalForms);
  } catch (error) {
    console.error("Error getting dental forms:", error);
    res.status(500).json({ message: "Error getting dental forms" });
  }
};

exports.addDentalForm = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already is use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newdentalForm = new User({ name, email, password: hashedPassword});
    await newdentalForm.save();
    
    res.status(201).json({ message: 'Company submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting Company' });
  }
};

exports.updateInsuranceForm = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      isNameDisabled,
      isPatientIdDisabled,
      isRepresentativeNameDisabled,
      isReferenceDisabled,
      isPhoneNumberDisabled
    } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Office not found' });
    }

    // Update only checkbox fields if they exist in req.body
    if (typeof isNameDisabled !== 'undefined') user.isNameDisabled = !!isNameDisabled;
    if (typeof isPatientIdDisabled !== 'undefined') user.isPatientIdDisabled = !!isPatientIdDisabled;
    if (typeof isRepresentativeNameDisabled !== 'undefined') user.isRepresentativeNameDisabled = !!isRepresentativeNameDisabled;
    if (typeof isReferenceDisabled !== 'undefined') user.isReferenceDisabled = !!isReferenceDisabled;
    if (typeof isPhoneNumberDisabled !== 'undefined') user.isPhoneNumberDisabled = !!isPhoneNumberDisabled;

    await user.save();  // <-- Correct usage here

    res.json({ message: 'Dental form updated successfully' });

  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ message: 'Error updating form' });
  }
};
