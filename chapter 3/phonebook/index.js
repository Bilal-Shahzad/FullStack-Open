const express = require('express')
const app = express()

app.use(express.json())

const morgan = require("morgan")
const cors = require("cors")


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
app.use(cors())

app.use(express.json())
morgan.token("post", function (req) {
  if (req.method === "POST") {
    return JSON.stringify(req.body)
  } else {
    return " "
  }
})
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :post")
)
app.get("/info", (request, response) => {
  response.send(
    `phonebook has info for ${persons.length} people <br> ${new Date()}`
  )
})

app.get("/api/persons", (request, response) => {
  response.json(persons)
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

// sets up route handler for HTTP post
app.post("/api/persons", (request, response) => {
  // extracts body property from request 
  const body = request.body

  // checks if the name property is missing in the request body 
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    })
  }

  // checks if ther are is a person with the same name 
  if (persons.filter(person => person.name === body.name).length > 0) {
    return response.status(400).json({
      error: "name must be unique",
    })
  }

  const person = {
    id: Math.floor(Math.random() * 1000),
    name: body.name,
    number: body.number,
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    })
  }

  persons = persons.concat(person)
  response.json(person)
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

app.get('/api/notes', (req, res) => {
  console.log('GET request to /api/notes')
  res.json(notes)
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
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
  const id = Number(request.params.id)
  console.log(`DELETE request to /api/notes/${id}`)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
