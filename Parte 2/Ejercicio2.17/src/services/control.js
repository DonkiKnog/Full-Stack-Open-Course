import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (listado) => {
    const request = axios.post(baseUrl, listado)
    return request.then(response => response.data)
}

const update = (persona) => {
    
    const nuevoNumero = {
        name: persona.name,
        number: persona.number
    }
    console.log('entra?', persona);
    const request = axios.put(`${baseUrl}/${persona.id}`, nuevoNumero)
    return request.then(response => response.data)
}

const supr = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, supr }