const express = require('express')
const {addDental, viewInsurance} = require('../controllers/insuranceController')

const router = express.router;

router.post('/addDental', addDental);
router.post('/viewInsurance', viewInsurance);

module.exports = router;