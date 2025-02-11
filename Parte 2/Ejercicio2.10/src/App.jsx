import { useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Personas.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1234 },
    { name: 'Carlos', number: 4321 }
  ]) 
  
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