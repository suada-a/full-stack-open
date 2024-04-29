const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = (props) => {
  return <p>Number of exercises {props.sumOfExercises}</p>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises1={props.exercises1} />
      <Part part={props.part2} exercises1={props.exercises2} />
      <Part part={props.part3} exercises1={props.exercises3} />
    </div>
  )
}