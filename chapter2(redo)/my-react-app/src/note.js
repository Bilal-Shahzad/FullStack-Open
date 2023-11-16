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

const notes = {
  getAll,
  create,
  update,
};

export default notes;
