import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Education from './Components/Education/Education'
import Tech from './Components/Tech/Tech'
import Project from './Components/Projects/Project'
import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'
import { BrowserRouter } from 'react-router-dom'
import Ballpit from './Components/Ballpit'


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
  
<section className="contact-wrapper">
        <div className="ballpit-bg">
          <Ballpit
            count={50}
            gravity={0.7}
            friction={0.8}
            wallBounce={1.95}
            followCursor
          />
        </div>
        <Contact />
      </section>
    </BrowserRouter>
  
  )
}

export default App
