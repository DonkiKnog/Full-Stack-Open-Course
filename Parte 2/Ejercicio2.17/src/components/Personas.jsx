import { useState } from 'react'
import personsService from '/src/services/control'

const Personas = ({filtrado, persons, setPersons, setMensaje}) => {

    const filtracion = persons.filter((persona) => {  
        return persona.name.toLowerCase().includes(filtrado.toLowerCase())
    })

    const borrar = (id, name) => {        
        if (window.confirm(`¿Deseas eliminar a ${name}?`)){
            personsService
            .supr(id)
            .then(returnedPerson => {
                const nuevoPersons = persons.filter(persona => persona.id !== returnedPerson.id)
                setPersons(nuevoPersons)
                setMensaje(`${name} borrado de la lista`)                
            })
        }
    }
   
    return(
        <div>    
            {filtracion.map((personaFiltrada) => {
            return (
            <>
                <p key={personaFiltrada.name}>{personaFiltrada.name} {personaFiltrada.number}</p>
                <button key={personaFiltrada.id} onClick={() => borrar(personaFiltrada.id, personaFiltrada.name)}>Delete</button>
            </>)
            })}
        </div>
    )
}

export default Personas