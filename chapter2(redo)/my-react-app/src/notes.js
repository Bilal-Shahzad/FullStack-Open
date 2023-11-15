import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

// Function to fetch all notes from the server
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

// Function to create a new note on the server
const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

// Function to update an existing note on the server
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

// Exporting the functions as an object
export default { 
  getAll, 
  create, 
  update 
}
