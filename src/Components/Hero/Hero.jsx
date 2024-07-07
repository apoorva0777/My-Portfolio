import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  useEffect(() => {
    const nameElement = document.querySelector('.hero-name');
    const name = nameElement.textContent;
    const characters = name.split(' ');
    nameElement.innerHTML = characters.map((char, index) => {
      return `<span style="animation-delay: ${index * 0.9}s">${char}</span>`;
    }).join(' ');
  }, []);

  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" height='270px' className="moving-image" />
      <h1> I'm <span className="hero-name">Apoorva Shukla</span></h1>
      <p>B.Tech CSE Student Delving into Full Stack Development</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
