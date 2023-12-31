import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhonebookApp = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name} - {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookApp;
