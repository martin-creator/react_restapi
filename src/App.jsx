import { useState } from 'react'
import NavBar from './components/NavBar'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Footer from './components/Footer'
import AllPosts from './screens/AllPosts'
import PostDetail from './screens/PostDetail'
import CreatePost from './screens/CreatePost'
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
        <Route exact path="/posts" element={<AllPosts />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path='/create/:postId/:userId' element={<CreatePost />}></Route>
        <Route exact path="/posts/:postId/:userId" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App
