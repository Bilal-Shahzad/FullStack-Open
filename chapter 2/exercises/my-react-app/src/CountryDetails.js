import React from 'react';
import Weather from './Weather';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <h4>Languages</h4>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ maxWidth: '150px' }} />
      <Weather capital={country.capital[0]} apiKey={import.meta.env.VITE_OPENWEATHERMAP_API_KEY} />
    </div>
  );
};

export default CountryDetails;
