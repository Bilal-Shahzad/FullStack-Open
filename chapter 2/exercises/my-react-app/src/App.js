import React, { useState, useEffect } from 'react';
import personService from './services/personService';
import Filter from './filter';
import PersonForm from './personform';
import Persons from './Persons';
import './index'
import Footer from './Footer';

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

  const showNotification = (message, type) => {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const addPerson = () => {
    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook. Do you want to update the number?`
      );

      if (!confirmUpdate) {
        return;
      }

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
          showNotification('Person updated successfully', 'success');
        })
        .catch(error => {
          console.error('Error updating person:', error);
          showNotification('Error updating person. Please try again later.', 'error');
        });
    } else {
      const newPerson = { name: newName, number: newNumber };

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons([...persons, returnedPerson]);
          setNewName('');
          setNewNumber('');
          showNotification('Person added successfully', 'success');
        })
        .catch(error => {
          console.error('Error adding person:', error);
          showNotification('Error adding person. Please try again later.', 'error');
        });
    }
  };

  const deletePerson = (id) => {
    const confirmDelete = window.confirm('Do you really want to delete this person?');
    if (confirmDelete) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          showNotification('Person deleted successfully', 'success');
        })
        .catch(error => {
          console.error('Error deleting person:', error);
          showNotification('Error deleting person. Please try again later.', 'error');
        });
    }
  };

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

      <Footer />

      {/* Notification container */}
      <div id="notification-container"></div>
    </div>
  );
};

export default App;
