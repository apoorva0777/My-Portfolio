import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" height='270px' className="moving-image" />
      <h1> I'm <span>Apoorva Shukla</span></h1>
      <p>B.Tech CSE Student Delving into Full Stack Development</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
