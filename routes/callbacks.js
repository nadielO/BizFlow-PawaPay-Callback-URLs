const express = require('express');
const router = express.Router();

// Importing controllers
const depositsController = require('../controllers/depositsController');
const payoutsController = require('../controllers/payoutsController');
const refundsController = require('../controllers/refundsController');

// Middleware to parse JSON bodies
router.use(express.json());

// Route for deposit callbacks
router.post('/deposit', (req, res) => {
    console.log('Deposit callback received with data:', req.body);
    depositsController.processDepositCallback(req, res).catch(error => {
        console.error('Error processing deposit callback:', error.message, error.stack);
        res.status(500).send('Error processing deposit callback');
    });
});

// Route for payout callbacks
router.post('/payout', (req, res) => {
    console.log('Payout callback received with data:', req.body);
    payoutsController.processPayoutCallback(req, res).catch(error => {
        console.error('Error processing payout callback:', error.message, error.stack);
        res.status(500).send('Error processing payout callback');
    });
});

// Route for refund callbacks
router.post('/refund', (req, res) => {
    console.log('Refund callback received with data:', req.body);
    refundsController.processRefundCallback(req, res).catch(error => {
        console.error('Error processing refund callback:', error.message, error.stack);
        res.status(500).send('Error processing refund callback');
    });
});

module.exports = router;