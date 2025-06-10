const crypto = require('crypto');

function generateSignature(timestamp, method, endpoint, body) {
  const preHashString = `${timestamp}${method}${endpoint}${body}`;

  const hmac = crypto.createHmac('sha256', process.env.YAYA_API_SECRET);
  hmac.update(preHashString);

  return hmac.digest('base64');
}

module.exports = { generateSignature };
