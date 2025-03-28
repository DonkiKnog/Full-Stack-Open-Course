import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (listado) => {
    const request = axios.post(baseUrl, listado)
    return request.then(response => response.data)
}

const update = () => {
    
}

const supr = () => {
    
}

export default { getAll, create, update, supr }