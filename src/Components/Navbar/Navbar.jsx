import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" height='90px' width='200px' />
      <ul className="nav-menu">
        <li>About</li>
        <li>Education</li>
        <li>Tech & tools</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
