import React from 'react';

const CountryList = ({ countries, onShowButtonClick }) => {
  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha3Code}>
          {country.name}
          <button onClick={() => onShowButtonClick(country)}>Show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
