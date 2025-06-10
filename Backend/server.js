// Import express
const express = require('express');
const mongoose = require("mongoose");
const productRoutes = require('./routes/productRoutes'); // Import routes
require('dotenv').config(); // loads the .env file
const orderRoutes = require("./routes/orderRoutes");

app.use("api/orders", orderRoutes);

const{ getProfile } = require("@yayawallet/node-sdk");

//make a profile req
getProfile().then((profile)=> {
    console.log("profile:", profile);
})
.catch((error)=> {
    console.error("Error fetching user profile:")
})

async function getProfileInformation(){
    try {
        const profile= await getProfile();
        console.log(profile);
    } catch (error){
        console.log("Errpr fetching user profile:", error);
    }
}


const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use routes - everything under /api/products goes to productRoutes
app.use('/api/products', productRoutes);

console.log ("Mongo URI from.env:", process.env.MONGO_URI);//connect to mongodb 

mongoose.connect(process.env.MONGO_URI, {
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
});