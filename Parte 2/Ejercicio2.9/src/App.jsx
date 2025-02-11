import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1234 },
    { name: 'Carlos', number: 4321 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumero, setNewNumero] = useState('')
  const [filtrado, setFiltrado] = useState('')

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
        setNewNumero('')
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

  const busca = (event) => {
    console.log('FUNCIONA BUSQUEDA:', event.target.value)
    setFiltrado(event.target.value)
  }
  
  const filtracion = persons.filter((persona) => {      
    return persona.name.toLowerCase().includes(filtrado.toLowerCase())
  })
  
  console.log('Hola?', filtracion);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filtrado} onChange={busca}/>
        <h2>Add a New</h2>
      </div>
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
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>    
        {filtracion.map((personaFiltrada) => {
          return (<p key={personaFiltrada.name}>{personaFiltrada.name} {personaFiltrada.number}</p>)
        })}  
      </div>
    </div>
  )
}

export default App