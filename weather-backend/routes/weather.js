const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:city", async (req, res) => {
  const city = req.params.city;
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Weather data not found." });
  }
});

module.exports = router;
