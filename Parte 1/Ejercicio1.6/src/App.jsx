import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Pintar = ({total, text}) => (
    <p>{text}{total}</p>
  )

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h1>Statistics</h1>
      <Pintar total={good} text='Good: '/>
      <Pintar total={neutral} text='Neutral: '/>
      <Pintar total={bad} text='Bad: '/>
    </div>
  )
}

export default App
