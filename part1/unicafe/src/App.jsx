import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && neutral === 0){
    return <p>No feedback given</p>
  }

  const total = (good + neutral + bad)
  const average = ((good) + (bad * -1)) / total
  const positive = good / total

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button 
        handleClick={() => setGood(good + 1)} 
        text="good"
      />
      <Button 
        handleClick={() => setNeutral(neutral + 1)} 
        text="neutral"
      />
      <Button 
        handleClick={() => setBad(bad + 1)} 
        text="bad"
      />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App