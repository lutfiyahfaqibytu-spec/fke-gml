const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  // Menerima parameter email dari query string frontend
  const email = req.query.email || (req.body && req.body.email);

  if (!email) {
    return res.status(400).json({ error: "Email diperlukan" });
  }

  try {
    const response = await fetch("https://gmailnator.p.rapidapi.com/api/inbox/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "gmailnator.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      },
      body: JSON.stringify({ email: email, limit: 10 })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
