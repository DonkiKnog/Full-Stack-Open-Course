import { useState } from 'react'

const PersonForm = ({persons,setPersons}) => {

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
        const listado = [{name: newName, number: newNumero}]
        const comprobar = persons.map(persona => {      
          if (persona.name === newName) {
            alert('Usuario ya existente')
          }else{
            setPersons(persons.concat(listado))
            setNewName('')
            setNewNumero('')
          }
        })
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