import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState('')
  const [name, setName] = useState(null)
  const [country, setCountry] = useState([])

  useEffect(() => {
    if (value) {
      const pais = country.filter((paises) => {  
        return paises.toLowerCase().includes(value.toLowerCase())
      })
      if (pais.length === 1) {
        axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${pais}`)
        .then(response => {
          setName(response.data)          
          console.log('Name:', name);
          
        })
        .catch(error => {
        })
      }else if (pais.length < 10) {
        setName(pais)
      }
           
    }
  }, [country])

  const handleChange = (event) => {
    setValue(event.target.value)
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const countries = response.data.map(paissos => {
          return paissos.name.common
        })
        setCountry(countries)
      })
  }

  const Pintar = ({entrada}) => {  
    if (entrada){
      if (entrada.length === 1) {
        return(
          <>
            <h1>{JSON.stringify(entrada.name.common, null, 2)}</h1>
            <p>{JSON.stringify(entrada.capital, null, 2)}</p>
            <p>{JSON.stringify(entrada.area, null, 2)}</p>
          </>
        )
      }
      {JSON.stringify(entrada, null, 2)}
    }    
  }

  return (
    <div>
      <form>
        Country: <input value={value} onChange={handleChange} />
      </form>
      <pre>
        <Pintar entrada={name}/>
        {/*{JSON.stringify(name, null, 2)}*/}
      </pre>
    </div>
  )
}

export default App