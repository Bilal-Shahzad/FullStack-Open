const Filter = ({ searchTerm, setSearchTerm }) => {
    return (
      <div>
        Search: <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    );
  };
  
  const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
  
const Persons = ({ persons }) => (
    <div>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
  
  const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Bilal Shahzad' }
    ]);
  
    return (
      <div>
        <h2>Phonebook</h2>
  
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  
        <h3>Add a new</h3>
  
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
        />
  
        <h3>Numbers</h3>
  
        <Persons persons={personsToShow} />
      </div>
    );
  };
  