import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from '/src/services/control'


const PersonForm = ({persons, setPersons, setMensaje}) => {

    const [newName, setNewName] = useState('')
    const [newNumero, setNewNumero] = useState('')
    
    const nombreNuevo = (event) => {
        setNewName(event.target.value)
    }
    
    const numeroNuevo = (event) => {
        setNewNumero(event.target.value)
    }

    const addPerson = (event) => {
      event.preventDefault()
      const listado = {name: newName, number: newNumero}
      let esta = false
      let personita = {}
      const comprobar = persons.map(persona => {      
        if (persona.name === newName) {
          esta = true
          personita = persona
          personita.number = newNumero
          console.log('personita', personita)
          console.log('persona', persona)
        }
      })

      if (esta) {
        if (window.confirm(`El usuario ya existe ¿Deseas modificar a ${newName}?`)) {
          personsService
            .update(personita)
            .then(returnedPerson => {
              const updatedPerson = persons.map(gente => {
                if (gente.name === newName) {
                  gente.number = listado.number
                  return {...gente, number: listado.number}
                }
                return gente
              })              
              setPersons(updatedPerson)
              setNewName('')
              setNewNumero('')
              setMensaje(`${newName} modificado`)
            })
        }
      } else {
      console.log(listado);
        personsService
          .create(listado)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumero('')
            setMensaje(`${returnedPerson.name} añadido a la lista`)
          })
        }
     }
      
    return(
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={nombreNuevo}/>
            </div>
            <div>
            number: <input value={newNumero} onChange={numeroNuevo}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm