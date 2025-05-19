const express=require('express');

const {getInsuranceForm,addInsuranceForm}=require('../controllers/insuranceController');
const {addDentalForm, getDentalForm } = require('../controllers/dentalController');

const router=express.Router();

// fist parameter is path and second is call back function which is coming from controllers
router.get('/getinsuranceform', getInsuranceForm);
router.post('/addinsuranceform', addInsuranceForm);

router.post('/adddentalform', addDentalForm);
router.get('/getdentalform', getDentalForm);

module.exports = router
