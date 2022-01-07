// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'
import {Toggle, useToggle} from './context/toggle-context'

function ToggleOn({children}) {
  const {on} = useToggle()

  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggle()

  return on ? null : children
}

function ToggleButton(props) {
  const {on, toggle} = useToggle()

  return <Switch on={on} onClick={toggle} {...props} />
}

// const App = () => <ToggleButton />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
