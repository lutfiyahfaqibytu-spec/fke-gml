const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email diperlukan" });
  }

  try {
    const response = await fetch(`https://gmailnator.p.rapidapi.com/api/inbox?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "gmailnator.p.rapidapi.com"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
