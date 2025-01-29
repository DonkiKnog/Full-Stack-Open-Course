import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votos, setVotos] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const copiaVotos = [...votos]

  const randomizar = () => {
    console.log('Votos:', votos)
    console.log('Copia Votos: ', copiaVotos)
    return(
      setSelected(Math.floor(Math.random() * 8))
    )
  }

  const sumaVoto = () => {
    console.log('Votos:', votos)
    console.log('Copia Votos: ', copiaVotos)
    copiaVotos[selected] += 1
    return(
      setVotos(copiaVotos)
    )
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button randomizar={randomizar} text='Next Anecdote'/>
      <p>Has {votos[selected]} votes</p>
      <Votar sumar={sumaVoto} text='Vote'/>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.randomizar}>{props.text}</button>
  )
}

const Votar = (props) => {
  return(
    <button onClick={props.sumar}>{props.text}</button>
  )
}

export default App