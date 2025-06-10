const fetch = require("node-fetch"); // to fetch from external API
const express = require("express");

const app = express();
app.use(express.json());

const EXTERNAL_API = "https://dummyjson.com/products"; // the external API

// GET all products - proxy to external API
app.get("/api/products", async (req, res) => {
  try {
    const response = await fetch(EXTERNAL_API);
    const products = await response.json();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
});

// GET single product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await fetch(`${EXTERNAL_API}/${productId}`);
    if (!response.ok) {
      return res.status(404).json({ message: "Product not found" });
    }
    const product = await response.json();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


