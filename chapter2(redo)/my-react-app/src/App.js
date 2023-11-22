import { useState, useEffect } from 'react';
import axios from 'axios';
// import Note from './components/Note';
import noteService from './services/notes';
import Filter from './components/PhoneBook/Filter';
import Persons from './components/PhoneBook/Persons';
import personService from './components/PhoneBook/services/Persons2';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(false);

  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      console.log('Fetched notes:', initialNotes);
      setNotes(initialNotes);
    });

    personService.getAll().then(initialPersons => {
      console.log('Fetched persons:', initialPersons);
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
    });
  }, []);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then(returnedNote => {
      console.log('Added note:', returnedNote);
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        console.log('Updated note:', returnedNote);
        setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
      })
      .catch(error => {
        console.error('Error updating note:', error);
        alert(`The note '${note.content}' was already deleted from the server`);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  const addPerson = event => {
    event.preventDefault();
    const currentName = persons.filter(person => person.name === newPerson.name);

    if (currentName.length === 0) {
      personService.create(newPerson).then(returnedPerson => {
        console.log('Added person:', returnedPerson);
        setPersons(persons.concat(returnedPerson));
        setPersonsToShow(persons.concat(returnedPerson));
      });
    } else {
      if (
        window.confirm(
          `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        personService.update(currentName[0].id, newPerson).then(returnedPerson => {
          console.log('Updated person:', returnedPerson);
          const updatedPersons = persons.map(person =>
            person.id !== returnedPerson.id ? person : returnedPerson
          );
          setPersons(updatedPersons);
          setPersonsToShow(updatedPersons);
        });
      }
    }
    setNewPerson({ name: '', number: '' });
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(response => {
        console.log('Deleted person:', response);
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons);
        setPersonsToShow(updatedPersons);
      });
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const filterByName = event => {
    const search = event.target.value;
    setFilter(search);
    setPersonsToShow(
      persons.filter(person => person.name.toLowerCase().includes(search))
    );
  };

  console.log('Rendering App');

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {/* {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))} */}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={event => setNewNote(event.target.value)} />
        <button type="submit">Save</button>
      </form>

      <h2>Phonebook</h2>
      <Filter filter={filter} filterByName={filterByName} />
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newPerson.name} onChange={handleChange} name="name" />
        </div>
        <div>
          Number: <input value={newPerson.number} onChange={handleChange} name="number" />
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
