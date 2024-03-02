// Function to get a reference to the 'payouts' collection in Firestore
module.exports = (firestore) => {
    try {
        console.log("Accessing the 'payouts' collection in Firestore.");
        return firestore.collection('payouts');
    } catch (error) {
        console.error("Failed to access the 'payouts' collection in Firestore:", error.message, error.stack);
        throw error; // Rethrowing the error to handle it further up in the call stack if necessary.
    }
};