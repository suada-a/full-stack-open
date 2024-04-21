import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  const total = (good + neutral + bad)

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = ((good) + (bad * -1)) / total
  const positive = good / total

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={total}/>
        <StatisticsLine text="average" value={average}/>
        <StatisticsLine text="positive" value={positive}/>
      </tbody>
    </table>
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