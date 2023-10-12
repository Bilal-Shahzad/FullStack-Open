import React from 'react';

const CountrySearch = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search for a country: </label>
      <input type="text" id="search" onChange={handleSearch} />
    </div>
  );
};

export default CountrySearch;
