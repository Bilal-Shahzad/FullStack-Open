require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Note = require('./models/note');

app.use(express.json());

const password = process.argv[2];
const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

mongoose.connect(url)
  .then(result => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error.message);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const PORT = process.env.PORT || 3001;

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
