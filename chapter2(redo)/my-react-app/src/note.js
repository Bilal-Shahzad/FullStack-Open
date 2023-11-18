import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = (newNote) => {
  return axios.post(baseUrl, newNote).then(response => response.data);
};

const update = (id, updatedNote) => {
  return axios.put(`${baseUrl}/${id}`, updatedNote).then(response => response.data);
};

const notes = ({ note, toggleImportance }) => {
    const label = note.important ? 'make not important' : 'make important';
  
    return (
      <li>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
      </li>
    );
  };

export default notes;
