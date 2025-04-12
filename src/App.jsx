import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Education from './Components/Education/Education'
import Tech from './Components/Tech/Tech'
import Project from './Components/Projects/Project'
import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
      </Navbar>
      <Hero></Hero>
      <Education></Education>
      <Tech></Tech>
      <Project></Project>
      {/* <Certificate></Certificate> */}
      <Contact></Contact>
    </BrowserRouter>
  
  )
}

export default App
