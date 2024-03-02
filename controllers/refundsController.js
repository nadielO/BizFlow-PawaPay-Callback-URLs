const firebaseAdmin = require('../utils/firebaseAdmin');
const refundsModel = require('../models/refundsModel');

// Function to handle refund callbacks
exports.processRefundCallback = async (req, res) => {
    try {
        const { transactionId, refundId, userId, amount, currency, timestamp, status } = req.body;
        if (!transactionId || !refundId || !userId || !amount || !currency || !timestamp || !status) {
            console.log('Missing required fields in refund callback request');
            return res.status(400).send('Missing required fields');
        }

        const firestore = firebaseAdmin.firestore();
        const refundsCollection = refundsModel(firestore);

        const refundDocument = {
            transactionId,
            refundId,
            userId,
            amount,
            currency,
            timestamp: firebaseAdmin.firestore.Timestamp.fromDate(new Date(timestamp)),
            status
        };

        await refundsCollection.doc(refundId).set(refundDocument);

        console.log(`Refund transaction processed successfully: ${refundId}`);
        res.status(200).send('Refund processed successfully');
    } catch (error) {
        console.error('Error processing refund callback:', error.message, error.stack);
        res.status(500).send('Error processing refund');
    }
};