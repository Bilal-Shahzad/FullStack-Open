import React, { useState } from 'react';

const Filter = ({ searchTerm, handleSearchChange }) => {
  console.log("Rendering Filter component");
  return (
    <div>
      Search: <input
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
  console.log("Rendering PersonForm component");
  return (
    <form>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

const Persons = ({ filteredPersons }) => {
  console.log("Rendering Persons component");
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  console.log("Rendering App component");
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };
      setPersons([...persons, newPerson]);

      setNewName('');
      setNewNumber('');
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} handleSearchChange={(e) => setSearchTerm(e.target.value)} />

      <h3>Add a new person</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
