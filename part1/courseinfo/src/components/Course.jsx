const Total = ({ parts }) => {
  const sumOfExercises = parts.reduce((previousExercises, currentExercises) => {
    return previousExercises + currentExercises.exercises
  }, 0)

  return <strong>total of {sumOfExercises} exercises</strong>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Header = ({ course }) => {
  return <h2>{course}</h2>
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )  
}

export default Course