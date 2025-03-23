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
  const [errorcito, setErrorcito] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {        
        console.log(response);
        setPersons(response)
      })
  }, [mensaje])
  
  const [filtrado, setFiltrado] = useState('')
  
  const Notification = ({mensaje, errorcito}) => {
    
    if (errorcito !== null){
      return(
        <div className='error'>
          {errorcito}
        </div>
      )
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
      <Notification mensaje={mensaje} errorcito={errorcito}/>
      <div>
        <Filter filtrado={filtrado} setFiltrado={setFiltrado}/>
        <h2>Add a New</h2>
      </div>
        <PersonForm persons={persons} setPersons={setPersons} setMensaje={setMensaje} setErrorcito={setErrorcito}/>
      <h2>Numbers</h2>
        <Personas filtrado={filtrado} persons={persons} setPersons={setPersons} setMensaje={setMensaje}/>
    </div>
  )
}

export default App