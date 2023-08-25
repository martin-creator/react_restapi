import { useState } from 'react'
import NavBar from './components/NavBar'
import About from './screens/About'
import Contact from './screens/Contact'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <About />
      <Contact />
    </div>
  )
}

export default App
