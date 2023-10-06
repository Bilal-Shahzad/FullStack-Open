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

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addPerson = () => {
    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook. Do you want to update the number?`
      );

      if (!confirmUpdate) {
        return;
      }

      // If the user confirms update the number using HTTP PUT
      const updatedPerson = { ...existingPerson, number: newNumber };

      personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(
            persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            )
          );
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error updating person:', error);
        });
    } else {
      // If the person doesn't exist, proceed with adding a new person
      const newPerson = { name: newName, number: newNumber };

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons([...persons, returnedPerson]);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error adding person:', error);
        });
    }
  };

  const deletePerson = (id) => {
    const confirmDelete = window.confirm('Do you really want to delete this person?');
    if (confirmDelete) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
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
      <Persons persons={persons} onDelete={deletePerson} />
    </div>
  );
};

export default App;
