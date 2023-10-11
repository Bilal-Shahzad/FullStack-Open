import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h3>{country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} sq km</p>
      <p>Languages: {country.languages.map(lang => lang.name).join(', ')}</p>
      <img src={country.flag} alt={`${country.name} flag`} style={{ width: '150px' }} />
    </div>
  );
};

export default CountryDetails;
