import { useState } from 'react'

const Personas = ({filtrado, persons}) => {

    const filtracion = persons.filter((persona) => {  
            
        return persona.name.toLowerCase().includes(filtrado.toLowerCase())
    })
   
    return(
        <div>    
            {filtracion.map((personaFiltrada) => {
            return (<p key={personaFiltrada.name}>{personaFiltrada.name} {personaFiltrada.number}</p>)
            })}  
        </div>
    )
}

export default Personas