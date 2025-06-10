const fetch = require('node-fetch');
const { getTime } = require('./time');
const { generateSignature } = require('./generateSignature');
require('dotenv').config();

async function apiRequest(method, path, params, body) {
  const parameters = new URLSearchParams();
  Object.keys(params).map((key) => {
    parameters.append(key, params[key]);
  });

  const url = `${process.env.NODE_ENV === 'production' ? process.env.YAYA_API_URL : process.env.YAYA_TEST_API_URL}${path}${parameters.toString() ? '?' + parameters.toString() : ''}`;

  const apiPath = `${process.env.YAYA_API_PATH}${path}`;

  const unixTimeResponse = await getTime();
  const unixTime = unixTimeResponse.time;
  const jsonBody = body ? JSON.stringify(body) : '';
  const signedPayload = generateSignature(unixTime, method, apiPath, jsonBody);

  const headers = {
    'Content-Type': 'application/json',
    'YAYA-API-KEY': process.env.YAYA_API_KEY,
    'YAYA-API-TIMESTAMP': unixTime,
    'YAYA-API-SIGN': signedPayload,
  };

  const response = await fetch(
    url,
    method === 'POST' || method === 'PUT'
      ? {
          method,
          headers,
          body: jsonBody,
        }
      : {
          method,
          headers,
        }
  );

  const apiResponse = await response.json();
  if (response.status !== 200 && response.status !== 201) {
    throw new Error(JSON.stringify({ ...apiResponse }));
  }

  return apiResponse;
}

module.exports = { apiRequest };
