# Pawapay Bizflow Callback URLs

This project is designed to handle callbacks for deposits, payouts, and refunds within a payment processing context, leveraging Firebase Firestore for data storage. It ensures secure and efficient processing of transaction updates through well-defined callback URLs, integrating seamlessly with the payment provider's workflow.

## Overview

Pawapay Bizflow Callback URLs utilizes a Node.js backend with Express for routing, alongside Firebase Admin SDK for secure Firestore interactions. The application architecture is modular, with a clear separation of concerns among routes, controllers, models, and utilities. This design facilitates scalability and maintainability. Security features include CORS middleware for request validation and Firebase Admin SDK for database access.

## Features

- Secure callback processing for deposits, payouts, and refunds.
- Structured Firestore document storage for transaction data.
- CORS configuration for security and API key/OAuth token-based endpoint protection.
- Detailed logging for debugging and operational tracking.

## Getting Started

### Requirements

- Node.js
- Firebase project setup with Firestore and Admin SDK
- Environment variables configured as per `.env` file

### Quickstart

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure your `.env` file with the required environment variables.
4. Start the application using `npm start` or `node index.js`.

### License

Copyright (c) 2024.