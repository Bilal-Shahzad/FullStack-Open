import React from 'react';

const PersonForm = ({ newName, newNumber, onNameChange, onNumberChange, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>
    <div>
      Name:
      <input 
        value={newName} 
        onChange={(event) => onNameChange(event.target.value)} 
      />
    </div>
    <div>
      Number: 
      <input 
        value={newNumber} 
        onChange={(event) => onNumberChange(event.target.value)} 
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

export default PersonForm;
