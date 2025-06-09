const express = require ('express');
const router = express.Router(); //to create mini exprss app for p 

const { getAllProducts, createProduct } = require("../controllers/productController");

router.get("/", getAllProducts); //set up the get route

router.post("/", createProduct);

module.exports = router; 