import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Personas from './components/Personas.jsx'
import axios from 'axios'
import personsService from './services/control'
import "./App.css"

const App = () => {

  const [persons, setPersons] = useState([])
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {        
        console.log(response);
        setPersons(response)
      })
  }, [])
  
  const [filtrado, setFiltrado] = useState('')
  
  const Notification = ({mensaje}) => {
    if (mensaje === null){
      return null
    }
    return (
      <div className='mensaje'>
        {mensaje}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification mensaje={mensaje}/>
      <div>
        <Filter filtrado={filtrado} setFiltrado={setFiltrado}/>
        <h2>Add a New</h2>
      </div>
        <PersonForm persons={persons} setPersons={setPersons} setMensaje={setMensaje}/>
      <h2>Numbers</h2>
        <Personas filtrado={filtrado} persons={persons} setPersons={setPersons} setMensaje={setMensaje}/>
    </div>
  )
}

export default App