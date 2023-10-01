import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const addPerson = () => {
    // Check if the entered name already exists in the phonebook
    const nameExists = persons.some(person => person.name === newName);

    // If the name already exists it issue a warning and return
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    // If the name doesn't exist proceed with adding a new person
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName('');
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
          // content of input field is controlled by react 
            value={newName} 
            // on change calls a function when value changes and setNewName takes object and sets it to the input 
            onChange={(event) => setNewName(event.target.value)} 
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
        <div key={index}>{person.name}</div>
      ))}
    </div>
  );
}

export default App;
