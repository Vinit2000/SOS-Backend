const express=require('express');

const {getInsuranceForm, addInsuranceForm, saveInsuranceFormConfig, getInsuranceFormConfig}=require('../controllers/insuranceController');
const {addDentalForm, getDentalForm } = require('../controllers/dentalController');

const router=express.Router();

// Existing routes
router.get('/getinsuranceform', getInsuranceForm);
router.post('/addinsuranceform', addInsuranceForm);

// // New routes for form configuration
// router.post('/saveinsuranceform', saveInsuranceFormConfig);
// router.get('/getinsuranceformconfig', getInsuranceFormConfig);

// Dental routes (working fine)
router.post('/adddentalform', addDentalForm);
router.get('/getdentalform', getDentalForm);

module.exports = router