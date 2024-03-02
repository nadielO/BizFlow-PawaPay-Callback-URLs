// Importing necessary modules
const express = require('express');
require('dotenv').config();
// Import the configured CORS middleware
const corsWhitelist = require('./utils/corsWhitelist');
// Import initialized Firebase Admin SDK
const firebaseAdmin = require('./utils/firebaseAdmin');
// Import callback routes
const callbackRoutes = require('./routes/callbacks');

// Initialize Express app
const app = express();

// Middleware
// Use the configured CORS middleware instead of the default one
app.use(corsWhitelist);

// Use callback routes with the base path `/api/callback`
app.use('/api/callback', callbackRoutes);

// Basic route
app.get('/', (req, res) => {
    console.log('Received request on /');
    res.status(200).send('Pawapay Bizflow Callback Service Running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error encountered: ${err.stack}`);
    res.status(500).send('Something broke!');
});

// Listening on a configurable port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Firebase Admin SDK has been initialized and is ready for use.');
});