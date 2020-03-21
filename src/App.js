import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props) => {
  return (
    <div>
      {/* <Link to='/'>Home</Link> */}
      {/* <button onClick={() => props.history.push('/')}>Home</button> */}
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      {/* <HomePage  /> */}
    </div>
  )
}

export default App
