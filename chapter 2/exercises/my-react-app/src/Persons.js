import React from 'react';

const persons = ({ persons }) => (
  <div>
    {persons.map((person, index) => (
      <div key={index}>{person.name} - {person.number}</div>
    ))}
  </div>
);

export default persons;
