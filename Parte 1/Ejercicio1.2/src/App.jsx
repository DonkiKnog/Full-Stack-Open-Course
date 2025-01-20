const App = () => {
  const curso = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={curso}/>
      <Content parte1={part1} ejercicio1={exercises1} parte2={part2} ejercicio2={exercises2} parte3={part3} ejercicio3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <>
      <Part partes={props.parte1} ejercicios={props.ejercicio1} />
      <Part partes={props.parte2} ejercicios={props.ejercicio2} />
      <Part partes={props.parte3} ejercicios={props.ejercicio3} />
    </>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

function Part(props) {
  return (
    <p>{props.partes} {props.ejercicios}</p>
  )
}


export default App