const Header = (props) => {
  return ( 
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part1.part} {props.part1.exercises}</p>
      <p>{props.part2.part} {props.part2.exercises}</p>
      <p>{props.part3.part} {props.part3.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseParts = [
    {part: part1, exercises: exercises1},
    {part: part2, exercises: exercises2},
    {part: part3, exercises: exercises3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={courseParts[0]} part2={courseParts[1]} part3={courseParts[2]} />
      <Total exercises1={courseParts[0].exercises} exercises2={courseParts[1].exercises} exercises3={courseParts[2].exercises} />
    </div>
  )
}

export default App
