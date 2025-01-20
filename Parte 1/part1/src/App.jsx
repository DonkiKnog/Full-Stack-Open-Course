const App = () => {
  const gente = [
    {name: 'Peter', age: 32},
    {name: 'Maya', age: 29},
  ]
  return (
    <>
      <p>{gente[0].name} {gente[0].age}</p>
      <p>{gente[1].name} {gente[1].age}</p>
      <Hello signor={gente[1].name} signor2={gente[1].age}/>
      <Hello signor={gente[1]} signor2={gente[1]}/>
    </>
  )
}

const Hello = (props)=> {
  return (
    <div>
      <p>Hello {props.signor.name}, you are {props.signor2.age}</p>
    </div>
  )
}

export default App