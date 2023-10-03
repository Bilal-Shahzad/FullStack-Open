import { useState } from 'react';
// import Filter from './Filter';
// import PersonForm from './PersonForm';
// import Persons from './Persons';

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
      
      {/* Form to add a new person */}
      <form onSubmit={storeInfo}>
        <div>
          {/* Input field for entering a name */}
          Name:
          <input 
            value={newName} 
            onChange={(event) => setNewName(event.target.value)} 
          />
        </div>
        <div>
          {/* Input field for entering a phone number */}
          Number: 
          <input 
            value={newNumber} 
            onChange={(event) => setNewNumber(event.target.value)} 
          />
        </div>
        <div>
          {/* Submit button to add a new person */}
          <button type="submit">Add</button>
        </div>
      </form>

      {/* Displaying the Numbers heading */}
      <h2>Numbers</h2>

      {/* Displays each person's name and number */}
      {persons.map((person, index) => (
        <div key={index}>{person.name} - {person.number}</div>
      ))}
    </div>
  );
}

export default App;
