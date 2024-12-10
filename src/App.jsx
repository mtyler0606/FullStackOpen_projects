import { useState } from 'react'


const Header = props => <h1>{props.value}</h1>

const Button = (props) => (<button onClick={props.handlecklick}>{props.value}</button>)

const StatisticLine = props => <p>{props.text} {props.value}</p> 

const Statistics = (props) => {
  const total = (props.good + props.neutral + props.bad)
  if(total === 0){
    return <p>No feedback given</p>
  }
  const average = (total === 0)? 0: (props.good-props.bad)/total
  const positive = (total === 0)? 0: (props.good)/total
  return(
    <>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="total" value={total} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />
    </> 
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = () => (good - bad) /(good + neutral + bad)  
  
  return (
    <div>
      <Header value='give feedback' />
      <br />
      <Button handlecklick={() => setGood(good + 1)} value="good"/>
      <Button handlecklick={() => setNeutral(neutral + 1)} value="neutral"/>
      <Button handlecklick={() => setBad(bad + 1)} value="bad"/>
      <br />
      <Header value='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App