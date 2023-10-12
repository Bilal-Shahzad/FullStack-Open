import React, { useState, useEffect } from 'react';

const Weather = ({ capital, apiKey }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather(null);
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [capital, apiKey]);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
