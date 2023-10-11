import React, { useState, useEffect } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

const CountryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Note for Bilal: need to still pull API info
  }, [searchQuery]);

  return (
    <div>
      <h2>Data for Countries</h2>

      <CountrySearch onSearch={setSearchQuery} />
      {countries.length > 10 && <p>Too many matches, be more specific</p>}
      {countries.length <= 10 && countries.length > 1 && <CountryList countries={countries} />}
      {countries.length === 1 && <CountryDetails country={countries[0]} />}
    </div>
  );
};

export default CountryPage;
