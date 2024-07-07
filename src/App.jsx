import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Education from './Components/Education/Education'
import Tech from './Components/Tech/Tech'
import Project from './Components/Projects/Project'



const App = () => {
  return (
    <div>
      <Navbar>
      </Navbar>
      <Hero></Hero>
      <Education></Education>
      <Tech></Tech>
      <Project></Project>

    </div>
  )
}

export default App
