const express = require('express');
const router = express.Router();
const valuationController = require('../controllers/valuationController');

router.post('/generate-valuation', valuationController.generateValuation);
router.get('/area-data', valuationController.getAreaData);

module.exports = router;
