const User=require('../models/dentalModel');
const bcrypt=require('bcryptjs');
require('dotenv').config();

// exports.getDentalForm = async (req, res) => {
//   try {
//     const { name } = req.query;
//     let filter = {};
//     if (name) filter.name = new RegExp(name, "i");
    
//     const dentalform = await User.find(filter);
//     res.json(dentalform);
//   } catch (error) {
//     console.error("Error getting insurance forms:", error);
//     res.status(500).json({ message: "Error getting insurance forms" });
//   }
// };

exports.addDentalForm = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newDentalForm = new User({ name, email, password: hashedPassword });
    await newDentalForm.save();
    
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
};