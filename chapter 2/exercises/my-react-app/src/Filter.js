import React from 'react';

const filter = ({ searchTerm, onSearchChange }) => (
  <div>
    Search: 
    <input 
      value={searchTerm} 
      onChange={(event) => onSearchChange(event.target.value)} 
    />
  </div>
);

export default filter;
