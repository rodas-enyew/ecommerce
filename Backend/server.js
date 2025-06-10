require("dotenv").config();
const express = require("express");
const { fetchAccessToken, ensureToken } = require("./authentication");
const { createPaymentIntent, getAllPaymentIntents } = require("./paymentIntent");

const app = express();
app.use(express.json());

// Manual token route 
app.post("/api/auth/token", async (req, res) => {
  try {
    const token = await fetchAccessToken();
    res.json({ accessToken: token });
  } catch {
    res.status(500).json({ error: "Could not retrieve token" });
  }
});

// Create payment intent
app.post("/api/payment-intent", ensureToken, createPaymentIntent);

// Get all payment intents
app.get("/api/payment-intents", ensureToken, getAllPaymentIntents);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
