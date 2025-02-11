import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1234 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumero, setNewNumero] = useState(0)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const listado = [{name: newName, number: newNumero}]
    const comprobar = persons.map(persona => {      
      if (persona.name === newName) {
        alert('Usuario ya existente')
      }else{
        setPersons(persons.concat(listado))
        setNewName('')
        setNewNumero(0)
      }
    })
  }

  const nombreNuevo = (event) => {
    console.log('FUNCIONA:', event.target.value)
    setNewName(event.target.value)
  }

  const numeroNuevo = (event) => {
    console.log('FUNCIONA NUMERO :', event.target.value)
    setNewNumero(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nombreNuevo}/>
          number: <input value={newNumero} onChange={numeroNuevo}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>
        {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}        
      </div>
    </div>
  )
}

export default App