const axios = require("axios");

let accessToken = null;
const YAYA_API = "https://pay.yayawallet.com";

const fetchAccessToken = async () => {
  try {
    const response = await axios.post(`${YAYA_API}/api/auth/token`, {
      clientId: process.env.YAYA_CLIENT_ID,
      clientSecret: process.env.YAYA_CLIENT_SECRET
    });

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    throw error;
  }
};

const ensureToken = async (req, res, next) => {
  try {
    if (!accessToken) {
      await fetchAccessToken();
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Token authentication failed." });
  }
};

const getToken = () => accessToken;

module.exports = {
  fetchAccessToken,
  ensureToken,
  getToken
};
