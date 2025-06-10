const fetch = require('node-fetch');

async function getTime() {
  const url = `${process.env.NODE_ENV === 'production' ? process.env.YAYA_API_URL : process.env.YAYA_TEST_API_URL}/time`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const unixResponse = await response.json();
  return unixResponse;
}

module.exports = { getTime };
