import { useState } from 'react';
import Filter from './filter'; 
import PersonForm from './personform'; 
import Persons from './Persons'

const App = () => {
  // State to manage the list of persons
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  
  // States to manage the input values for name and number
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
      
      {/* Filter component for the search functionality */}
      <Filter 
        searchTerm={newName} 
        onSearchChange={setNewName} 
      />

      <h3>Add a new</h3>

      {/* PersonForm file being called for adding new people */}
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        onNameChange={setNewName} 
        onNumberChange={setNewNumber} 
        onFormSubmit={storeInfo} 
      />

      <h3>Numbers</h3>

      {/* Persons file being called for rendering the list of people */}
      <Persons persons={persons} />
    </div>
  );
}

export default App;
