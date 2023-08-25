import { useState } from 'react'
import NavBar from './components/NavBar'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router> 
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App
