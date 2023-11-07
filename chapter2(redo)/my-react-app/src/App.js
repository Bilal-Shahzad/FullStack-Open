import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([...persons]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        const notes = response.data;
        setPersons(notes);
        setFilteredPersons(notes);
      });
  }, []); 
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

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const updatedFilteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPersons(updatedFilteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Search: <input
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <h3>Add a new</h3>

      <form>
        <div>
          name: <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>

      <h3>Numbers</h3>

      <ul>
        {filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
