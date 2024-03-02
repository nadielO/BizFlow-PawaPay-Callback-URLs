const cors = require('cors');
require('dotenv').config();

// Extract the whitelisted domains from the .env file
const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(',') : [];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    console.log(`Origin of request ${origin}`);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin allowed by CORS');
      callback(null, true);
    } else {
      console.error('Origin not allowed by CORS');
      callback(new Error('Not allowed by CORS'), false);
    }
  },
};

// Export the configured CORS middleware
module.exports = cors(corsOptions);