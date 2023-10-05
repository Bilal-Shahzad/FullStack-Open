import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './filter'; 
import PersonForm from './personform'; 
import Persons from './Persons'; 

const App = () => {
  // State to manage the list of persons
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Effect hook to fetch initial data from the server
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  // Function to add a new person to the phonebook
  const addPerson = () => {
    // Check if the entered name already exists in the phonebook
    const nameExists = persons.some(person => person.name === newName);

    // Check if the entered name or number already exists in the phonebook
    const numberExists = persons.some(person => person.number === newNumber);

    // If the name or number already exists, issue a warning and return
    if (nameExists || numberExists) {
      alert(`${newName} or ${newNumber} is already added to the phonebook`);
      return;
    }

    // If the name and number don't exist, proceed with adding a new person
    const newPerson = { name: newName, number: newNumber };
    setPersons([...persons, newPerson]);
    
    // Clear the input fields after adding a person
    setNewName('');
    setNewNumber('');
  };

  // Function to handle form submission, prevents it from submitting again
  const storeInfo = (event) => {
    event.preventDefault();
    addPerson();
  };

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Filter component for search functionality */}
      <Filter 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <h3>Add a new</h3>

      {/* PersonForm component for adding new people */}
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        onNameChange={setNewName} 
        onNumberChange={setNewNumber} 
        onFormSubmit={storeInfo} 
      />

      <h3>Numbers</h3>

      {/* Persons component for rendering the list of people */}
      <Persons persons={persons} />
    </div>
  );
}

export default App;
