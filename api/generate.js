const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Langsung masukkan key secara langsung di sini untuk menguji apakah masalahnya memang di env var Vercel
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "27405c48d9msh2fe537b21c18705p176efejsn0ab55a96f8aa";
  
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

    const responseText = await response.text();
    
    // Cek apakah balasan dari RapidAPI valid JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      return res.status(500).json({ error: "Invalid JSON from RapidAPI", raw: responseText });
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: "RapidAPI Error", details: data });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error: " + error.message });
  }
};
