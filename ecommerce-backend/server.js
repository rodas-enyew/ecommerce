// Import express
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require('./routes/productRoutes'); // Import routes

dotenv.config();

const app = express();


// Middleware to parse incoming JSON requests
app.use(express.json());

// Use routes - everything under /api/products goes to productRoutes
app.use('/api/products', productRoutes);

mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTolpology: true,
})
.then(()=> {
    console.log("Connected to MongoDB!");

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
.catch((error) => {
    console.error("Failed To connect to MongoDB: ", error.message);
})