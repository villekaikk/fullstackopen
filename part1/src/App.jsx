const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = (props) => {

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.part1}/>
    <Part part={props.part3}/>
    <Part part={props.part2}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}

export default App