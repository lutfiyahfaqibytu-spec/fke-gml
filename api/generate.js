const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  
  try {
    const response = await fetch("https://gmailnator.p.rapidapi.com/api/emails/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "gmailnator.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      },
      body: JSON.stringify({})
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
