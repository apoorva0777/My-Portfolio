import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" height='90px' width='200px' />
      <ul className="nav-menu">
        <li>
          <Link to="#about" className="link">About</Link>
        </li>
        <li>
          <Link to="#education" className="link">Education</Link>
        </li>
        <li>
          <Link to="#tech" className="link">Tech & tools</Link>
        </li>
        <li>
          <Link to="#project" className="link">Projects</Link>
        </li>
        <li>
          <Link to="#contact" className="link">Contact</Link>
        </li>
      </ul>
      <div className="nav-connect"><a href='https://www.linkedin.com/in/apoorvashukla0702/'>Connect With Me</a></div>
    </div>
  )
}

export default Navbar
