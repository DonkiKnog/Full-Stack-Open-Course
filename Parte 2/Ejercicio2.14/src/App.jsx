import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Personas.jsx'
import axios from 'axios'
import personsService from './services/control'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {        
        console.log(response);
        setPersons(response)
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
        <Persons filtrado={filtrado} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App