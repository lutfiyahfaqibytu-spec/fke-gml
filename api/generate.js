const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  
  try {
    const response = await fetch("https://gmailnator.p.rapidapi.com/api/emails/generate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "gmailnator.p.rapidapi.com"
      },
      body: JSON.stringify({})
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
