const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(express.json())

let persons = 
[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

morgan.token('usuario', function (req, res) {
    if (req.method === 'POST') {
      return JSON.stringify(req.body)
    }
    return ''
  })

app.use(morgan(':method :url :status :response-time ms :usuario')) 

app.get('/', (request, response) => {
    response.send('<h1>Raichu</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const entradas = persons.length
  const fecha = Date()
  response.send(
    `<p>Phonebook has info for ${entradas} people</p>
    <p>${fecha}</p>`
  )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const persona = persons.find((persona) => persona.id === id)
  if (persona) {
    response.json(persona)
  }else{
    response.statusMessage = "Ese raichu no esta"
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((persona) => persona.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const aleatorio = Math.floor(Math.random() * (1000 - 1) +1)
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'content missing'
        }) 
    }

    const mismo = persons.find((nombre) => nombre.name === body.name)
    
    if (mismo) {
        return response.status(400).json({
            error: 'nombre ya incluido'
        }) 
    }

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'faltan datos'
        }) 
    }

    const persona = {
        id: aleatorio,
        name: body.name,
        number: body.number
    }
    persons = persons.concat(persona)
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);    
})