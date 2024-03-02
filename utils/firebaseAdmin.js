const admin = require('firebase-admin');
require('dotenv').config();

// Error handling for missing environment variable for Firebase service account key path
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH) {
  console.error('FIREBASE_SERVICE_ACCOUNT_KEY_PATH is not defined in the .env file. Please specify the path to your Firebase service account key.');
  process.exit(1); // Exit the application if the configuration is missing
}

try {
  const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH); // INPUT_REQUIRED {path to your Firebase service account key JSON file}

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log('Firebase Admin SDK has been initialized successfully.');
} catch (error) {
  console.error('Failed to initialize Firebase Admin SDK:', error);
  process.exit(1); // Exit the application in case of an error during initialization
}

module.exports = admin;