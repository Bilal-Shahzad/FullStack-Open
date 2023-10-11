import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div>
      <h3>Matching Countries</h3>
      <ul>
        {countries.map(country => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
