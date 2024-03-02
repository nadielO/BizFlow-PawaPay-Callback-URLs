const firebaseAdmin = require('../utils/firebaseAdmin');
const depositsModel = require('../models/depositsModel');

// Function to handle deposit callbacks
exports.processDepositCallback = async (req, res) => {
    try {
        const { transactionId, userId, amount, currency, timestamp, status } = req.body;
        // Validate request data
        if (!transactionId || !userId || !amount || !currency || !timestamp || !status) {
            console.error('Missing required fields in deposit callback');
            return res.status(400).send('Missing required fields');
        }

        const firestore = firebaseAdmin.firestore();
        const depositsCollection = depositsModel(firestore);

        // Construct the deposit document
        const depositDocument = {
            transactionId,
            userId,
            amount,
            currency,
            timestamp: firebaseAdmin.firestore.Timestamp.fromDate(new Date(timestamp)),
            status
        };

        // Write the document to Firestore
        await depositsCollection.doc(transactionId).set(depositDocument);

        console.log(`Deposit transaction processed: ${transactionId}`);
        res.status(200).send('Deposit processed successfully');
    } catch (error) {
        console.error('Error processing deposit callback:', error.message, error.stack);
        res.status(500).send('Error processing deposit');
    }
};