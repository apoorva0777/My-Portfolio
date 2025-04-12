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
    <div id='about' className='hero'>
      <img src={profile_img} alt="Profile" height='270px' className="moving-image" />
      <h1> I'm <span className="hero-name">Apoorva Shukla</span></h1>
      <p>"Aspiring Software Developer | B.Tech CSE Student | Passionate about Data Structures & Algorithms and problem-solving."</p>
      <div className="hero-action">
        <div className="hero-connect"><a href='https://github.com/apoorva0777'>Github</a></div>
        <div className="hero-resume"><a href='https://drive.google.com/file/d/1mMEO8Jr5Km7Uiu6m7OQzJgFmE5d6z77X/view?usp=drive_link'>My resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
