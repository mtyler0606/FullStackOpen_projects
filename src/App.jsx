import { useState } from 'react'

{/*
h1 - 
  
  */}

const Header = props => <h1>{props.value}</h1>

const Button = (props) => (<button onClick={props.handlecklick}>{props.value}</button>)

const Total = (props) => <p>{props.text} {props.total}</p>

const defaultAction = () => {
  const handler = () => console.log("Button Clicked");
  return handler;
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
      <Header value='statics' />
      <br />
      <Total text='good' total={good} />
      <Total text='neutral' total={neutral} />
      <Total text='bad' total={bad} />
      <Total text='all' total={(good + neutral + bad)} />
      <Total text='average' total={(good - bad) /(good + neutral + bad)} />
      <Total text='postive' total={(good) /(good + neutral + bad)} />
    </div>
  )
}

export default App