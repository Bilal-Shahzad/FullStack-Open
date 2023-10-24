import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = { name: newName };

      setPersons([...persons, newPerson]);
      setNewName('');
    }
  };

  console.log('persons:', persons);
  console.log('newName:', newName);

  return (
    <div>
      console.log('Rendering the component');
      <h2>Phonebook</h2>
      <form>
        <div>
          console.log('Rendering the input field');
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          console.log('Rendering the submit button');
          <button type="submit" onClick={addPerson}>
            console.log('Rendering the button text');
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            console.log(`Rendering person ${index}: ${person.name}`);
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log('App component loaded');

export default App;
