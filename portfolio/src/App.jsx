import React from 'react'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Perspective from './assets/Components/Perspective'
import Projects from './assets/Components/Projects'
import Stack from './assets/Components/Stack'
import NavBar from './assets/Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from './assets/Components/Theme'

const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App