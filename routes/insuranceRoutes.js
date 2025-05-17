const express=require('express');

const {getInsuranceForm,addInsuranceForm}=require('../controllers/insuranceController');

const router=express.Router();

// fist parameter is path and second is call back function which is coming from controllers
router.get('/getinsuranceforms', getInsuranceForm);
router.post('/addinsuranceform', addInsuranceForm);

module.exports=router;