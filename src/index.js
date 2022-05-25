import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import Seven from './Seven'
import Eight from './Eight'
import Nine from './Nine'

function App() {
  return (
    <div className="App">
      <Header />
      <One />
      <Three />
      <Two />
      <Five />
      <Four />
      <Seven />
      <Eight />
      <Nine />
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
