import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const listado = [{name: newName}]
    const comprobar = persons.map(persona => {      
      if (persona.name === newName) {
        alert('Usuario ya existente')
      }else{
        setPersons(persons.concat(listado))
        setNewName('')
      }
    })
  }

  const nombreNuevo = (event) => {
    console.log('FUNCIONA:', event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nombreNuevo}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}        
      </div>
    </div>
  )
}

export default App