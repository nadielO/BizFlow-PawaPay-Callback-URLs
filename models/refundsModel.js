// Function to get a reference to the 'refunds' collection in Firestore
module.exports = (firestore) => {
    if (!firestore) {
        console.error('Firestore instance was not provided to refundsModel.');
        throw new Error('Firestore instance is required for refundsModel.');
    }
    console.log('Accessing the refunds collection in Firestore.');
    return firestore.collection('refunds');
};