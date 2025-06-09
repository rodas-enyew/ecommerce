// Load environment variables from .env file
require('dotenv').config();

// Import express
const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productRoutes');

// Use routes - everything under /api/products goes to productRoutes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});