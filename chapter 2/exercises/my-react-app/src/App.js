import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
    setNewName('');
    setNewNumber('');
  };

  const storeInfo = (event) => {
    // Prevents it from submitting again
    event.preventDefault();
    addPerson();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* Creates a form that calls storeInfo for adding a new person */}
      <form onSubmit={storeInfo}>
        <div>
          Name:
          <input 
            value={newName} 
            onChange={(event) => setNewName(event.target.value)} 
          />
        </div>
        <div>
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

      {/* Displays each person's name */}
      {persons.map((person, index) => (
        <div key={index}>{person.name} - {person.number}</div>
      ))}
    </div>
  );
}

export default App;
