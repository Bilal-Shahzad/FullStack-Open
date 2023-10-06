import React, { useState, useEffect } from 'react';
import personService from './services/personService';
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
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to add a new person to the phonebook
  const addPerson = () => {
    const nameExists = persons.some(person => person.name === newName);
    const numberExists = persons.some(person => person.number === newNumber);

    if (nameExists || numberExists) {
      alert(`${newName} or ${newNumber} is already added to the phonebook`);
      return;
    }

    // If the name and number don't exist, proceed with adding a new person
    const newPerson = { name: newName, number: newNumber };

    // Make a POST request to the server to save the new person
    personService.create(newPerson)
      .then(returnedPerson => {
        // Update the state with the new person returned from the server
        setPersons([...persons, returnedPerson]);
      })
      .catch(error => {
        console.error('Error adding person:', error);
      });

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
