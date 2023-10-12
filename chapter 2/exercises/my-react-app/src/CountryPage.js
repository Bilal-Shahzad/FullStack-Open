import React, { useState, useEffect } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

const CountryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://studies.cs.helsinki.fi/restcountries/api/all');

        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }

        const data = await response.json();
        setCountries(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountries([]);
        setError('Failed to fetch countries');
      }
    };

    fetchCountries();
  }, [searchQuery]);

  return (
    <div>
      <h2>Data for Countries</h2>

      <CountrySearch onSearch={setSearchQuery} />
      {error && <p>{error}</p>}
      {countries.length > 10 && <p>Too many matches, be more specific</p>}
      {countries.length <= 10 && countries.length > 1 && <CountryList countries={countries} />}
      {countries.length === 1 && <CountryDetails country={countries[0]} />}
    </div>
  );
};

export default CountryPage;
