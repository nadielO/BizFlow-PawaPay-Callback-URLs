const firebaseAdmin = require('../utils/firebaseAdmin');
const payoutsModel = require('../models/payoutsModel');

// Function to handle payout callbacks
exports.processPayoutCallback = async (req, res) => {
    try {
        const { transactionId, userId, amount, currency, timestamp, status } = req.body;
        if (!transactionId || !userId || !amount || !currency || !timestamp || !status) {
            console.log('Missing required fields in payout callback');
            return res.status(400).send('Missing required fields');
        }

        const firestore = firebaseAdmin.firestore();
        const payoutsCollection = payoutsModel(firestore);

        const payoutDocument = {
            transactionId,
            userId,
            amount,
            currency,
            timestamp: firebaseAdmin.firestore.Timestamp.fromDate(new Date(timestamp)),
            status
        };

        await payoutsCollection.doc(transactionId).set(payoutDocument);

        console.log(`Payout transaction processed: ${transactionId}`);
        res.status(200).send('Payout processed successfully');
    } catch (error) {
        console.error('Error processing payout callback:', error.message, error.stack);
        res.status(500).send('Error processing payout');
    }
};