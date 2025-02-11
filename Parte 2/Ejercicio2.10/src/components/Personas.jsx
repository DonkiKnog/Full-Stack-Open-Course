import { useState } from 'react'

const Personas = ({filtrado, persons}) => {

    console.log('Arriba');
    
    
    const filtracion = persons.filter((persona) => {  
        console.log('Entra?');
            
        return persona.name.toLowerCase().includes(filtrado.toLowerCase())
    })

    console.log('Llega');
    

    return(
        <div>    
            {filtracion.map((personaFiltrada) => {
            return (<p key={personaFiltrada.name}>{personaFiltrada.name} {personaFiltrada.number}</p>)
            })}  
        </div>
    )
}

export default Personas