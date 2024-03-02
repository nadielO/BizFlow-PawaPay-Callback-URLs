// Function to get a reference to the 'deposits' collection in Firestore
module.exports = (firestore) => {
    if (!firestore) {
        console.error('Firestore instance was not provided to depositsModel.');
        throw new Error('Firestore instance is required for depositsModel.');
    }
    console.log('Accessing the deposits collection in Firestore.');
    return firestore.collection('deposits');
};