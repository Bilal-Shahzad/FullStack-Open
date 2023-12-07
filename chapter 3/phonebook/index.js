// imoorts express 
const express = require('express')
// creates exxpress application within app
const app = express()

app.use(express.json())
// adds middleware to express

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

const number = persons.length
// this sets up a rooute for handling GET requests 

app.get("/info", (request, response) => {
  // (request, response) gets used when a GET request is made for info 
  response.send(`phonebook has info for ${number} people <br> ${new Date()}`)
// response.send sends a response call 
})

app.get("/api/persons", (request, response) => {
  response.json(persons)
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/', (req, res) => {
  console.log('GET request to /')
  res.send('<h1>Hello World!</h1>')
})
// sets up route for handline http get requests to root path (/)

app.get('/api/notes', (req, res) => {
  console.log('GET request to /api/notes')
  res.json(notes)
})
// defines a route for handling HTTP get reuqest to /api/notes

const generateId = () => {
  // function for generating a new ID 
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  // route for handling HTTP post request to create a new note 
  console.log('POST request to /api/notes')
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
  // route for handling HTTP get to fetch a single note 
  const id = Number(request.params.id)
  console.log(`GET request to /api/notes/${id}`)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  // route for handling HTTP DELETE requests a note 
  const id = Number(request.params.id)
  console.log(`DELETE request to /api/notes/${id}`)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
// specifies the port the server will be running on