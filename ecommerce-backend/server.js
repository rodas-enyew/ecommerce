require ("dotenv").config(); //lods env vars from env file

//import express 
const express = require("express"); //gives an easy way to create servers
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes")

//create express app
const app = express();

//middleware
app.use(cors({ origin: process.env.FRONTEND_URL}));
app.use(express.json()); 
//converts JSON into req.body since express doen;t understad it

app.use("/api/products", productRoutes);  //routes for products

mongoose.connect(process.env.MONGO_URI,{
    useNewURParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("mongoDB connected"))
.catch((err)=> console.error("MongoDB connection error:", err));

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})