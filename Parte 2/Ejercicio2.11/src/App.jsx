import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Personas.jsx'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {        
        console.log(response);
        setPersons(response.data)
      })
  }, [])
  
  const [filtrado, setFiltrado] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter filtrado={filtrado} setFiltrado={setFiltrado}/>
        <h2>Add a New</h2>
      </div>
        <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
        <Persons filtrado={filtrado} persons={persons}/>
    </div>
  )
}

export default App