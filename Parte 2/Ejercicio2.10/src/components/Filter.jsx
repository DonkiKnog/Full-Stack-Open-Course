import { useState } from 'react'

const Filter = ({filtrado, setFiltrado}) => {

    const busca = (event) => {
      console.log('FUNCIONA BUSQUEDA:', event.target.value)
      setFiltrado(event.target.value)
    }    

    return(
        <input value={filtrado} onChange={busca}/>
    )   
}

export default Filter