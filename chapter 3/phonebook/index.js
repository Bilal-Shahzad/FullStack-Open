// Import the Express and Mongoose libraries
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Import the Note model from the specified file
const Note = require('./models/note');

// Load environment variables from a .env file
require('dotenv').config();

// Middleware function for logging request information
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method); // Log HTTP method
  console.log('Path:  ', request.path);   // Log requested path
  console.log('Body:  ', request.body);   // Log request body
  console.log('---');
  next();  // Call the next middleware in the stack
};

// Middleware function for handling unknown endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' }); // Send a 404 response with an error message
};

// Enable Cross-Origin Resource Sharing
app.use(cors());

// looks incoming JSON requests
app.use(express.json());

// use the requestLogger middleware for all routes
app.use(requestLogger);

// Serve static files from the 'build' directory
app.use(express.static('build'));

// array to store notes 
let notes = []

// Route to get all notes from the MongoDB database
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes); // Send JSON response with the retrieved notes
  });
});

// Route to add a new note to the MongoDB database
app.post('/api/notes', (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' }); // Send a 400 response with an error message
  }

  // Create a new Note instance with content and importance information
  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  // Save the new note to the MongoDB database
  note.save().then(savedNote => {
    response.json(savedNote); // Send JSON response with the saved note
  });
});

// Route to get a specific note by ID from the MongoDB database
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note); // Send JSON response with the retrieved note
  });
});

// Route to delete a note by ID from the MongoDB database
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id); // Remove the note with the specified ID from the array

  response.status(204).end(); // Send a 204 response
});

// Use the unknownEndpoint middleware for all unmatched routes
app.use(unknownEndpoint);

// Retrieve the port 3001 from the environment variable and start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log the port number when the server starts
});
