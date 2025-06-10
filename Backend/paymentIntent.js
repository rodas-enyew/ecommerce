const axios = require("axios");
const { getToken } = require("./authentication");

const YAYA_API = "https://pay.yayawallet.com";

// POST /api/payment-intent
const createPaymentIntent = async (req, res) => {
  const { amount, currency, customerPhone, paymentMethod } = req.body;

  try {
    const response = await axios.post(
      `${YAYA_API}/api/payment-intent`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ 
      sucess: false,
      message: error.response?.data || "Failed to create payment intent."
 });
  }
};

// GET /api/payment-intents
const getAllPaymentIntents = async (req, res) => {
  try {
    const response = await axios.get(`${YAYA_API}/api/payment-intents`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Get payment intents error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch payment intents." });
  }
};

module.exports = {
  createPaymentIntent,
  getAllPaymentIntents
};
