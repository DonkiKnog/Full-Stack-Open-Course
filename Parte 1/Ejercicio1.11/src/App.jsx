import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [puntuacion, setPuntuacion] = useState(0)

  const handleGood = () => {
    const newPuntuacion = puntuacion + 1
    setPuntuacion(newPuntuacion)
    const newGood = good + 1
    setGood(newGood)
    const newTotal = total + 1
    setTotal(newTotal)
    const newAverage = newPuntuacion/newTotal
    setAverage(newAverage)
    const newPositive = (newGood*100)/newTotal
    setPositive(newPositive)
    console.log('BOTON GOOD PULSADO:')
    console.log('Good', newGood)
    console.log('Neutral', neutral)
    console.log('Bad', bad)
    console.log('Total', total)
    console.log('Average', average)
    console.log('Positive', positive)
    console.log('Puntuacion', newPuntuacion)
    console.log('FIN BOTON GOOD PULSADO')
  }

  const handleNeutral = () => {
    const newPuntuacion = puntuacion 
    setPuntuacion(newPuntuacion)
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newTotal = total + 1
    setTotal(newTotal)
    const newAverage = newPuntuacion/newTotal
    setAverage(newAverage)
    const newPositive = good/newTotal
    setPositive(newPositive)
    console.log('BOTON NEUTRAL PULSADO:')
    console.log('Good', good)
    console.log('Neutral', newNeutral)
    console.log('Bad', bad)
    console.log('Total', newTotal)
    console.log('Positive', newPositive)
    console.log('Puntuacion', newPuntuacion)
    console.log('FIN BOTON NEUTRAL PULSADO')
  }

  const handleBad = () => {
    const newPuntuacion = puntuacion - 1
    setPuntuacion(newPuntuacion)
    const newBad = bad + 1
    setBad(newBad)
    const newTotal = total + 1
    setTotal(newTotal)
    const newAverage = newPuntuacion/newTotal
    setAverage(newAverage)
    const newPositive = good/newTotal
    setPositive(newPositive)
    console.log('BOTON BAD PULSADO:')
    console.log('Good', good)
    console.log('Neutral', neutral)
    console.log('Bad', newBad)
    console.log('Total', newTotal)
    console.log('Average', newAverage)
    console.log('Positive', newPositive)
    console.log('Puntuacion', newPuntuacion)
    console.log('FIN BOTON BAD PULSADO')
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <Pintar good={props.good} textGood='Good: '
        neutral={props.neutral} textNeutral='Neutral: '
        bad={props.bad} textBad='Bad: '
        total={props.total} textTotal='Total: '
        average={props.average} textAverage='Average: '
        positive={props.positive} textPositive='Positive: '/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Pintar = ({good, textGood, neutral, textNeutral, bad, textBad, total, textTotal, average, textAverage, positive, textPositive}) => (
  <div>
    <table>
      <tbody>
        <tr>
        <td>{textGood}</td>
        <td>{good}</td>
        </tr>
        <tr>
        <td>{textNeutral}</td>
        <td>{neutral}</td>
        </tr>
        <tr>
        <td>{textBad}</td>
        <td>{bad}</td>
        </tr>
        <tr>
        <td>{textTotal}</td>
        <td>{total}</td>
        </tr>
        <tr>
        <td>{textAverage}</td>
        <td>{average}</td>
        </tr>
        <tr>
        <td>{textPositive}</td>
        <td>{positive}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default App