import React, { useState } from "react";
import axios from "axios";
import './index.css';


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError("City not found. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">🌤️ Weather App</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300"
        />
        <button onClick={fetchWeather} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {weather && (
        <div className="mt-6 bg-white p-6 rounded shadow-lg w-80">
          <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
          <p className="text-gray-700">🌡️ Temp: {weather.main.temp}°C</p>
          <p className="text-gray-700">💨 Wind: {weather.wind.speed} m/s</p>
          <p className="text-gray-700">⛅ Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

 