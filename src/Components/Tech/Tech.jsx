import React from 'react';
import './Tech.css'; // Import CSS for Tech Section styling
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs,FaDatabase,FaCode ,FaMicrosoft, FaGithub, FaJava, FaCuttlefish } from 'react-icons/fa';

const Tech = () => {
  return (
    <div className="tech-section" id="tech">
      <h2>Tech & Tools</h2>
      <div className="tech-list">
        <div className="tech-item">
          <FaReact className="icon" />
          <span>React</span>
        </div>
        <div className="tech-item">
          <FaHtml5 className="icon" />
          <span>HTML5</span>
        </div>
        <div className="tech-item">
          <FaCss3 className="icon" />
          <span>CSS3</span>
        </div>
        <div className="tech-item">
          <FaJs className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="tech-item">
          <FaNodeJs className="icon" />
          <span>Node.js</span>
        </div>
        <div className="tech-item">
          <FaDatabase className="icon" />
          <span>MongoDB</span>
        </div>
        <div className="tech-item">
          <FaCode className="icon" />
          <span>VSCode</span>
        </div>
        <div className="tech-item">
          <FaMicrosoft className="icon" />
          <span>MS PowerPoint</span>
        </div>
        <div className="tech-item">
          <FaMicrosoft className="icon" />
          <span>MS Word</span>
        </div>
        <div className="tech-item">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </div>
        <div className="tech-item">
          <FaJava className="icon" />
          <span>Java</span>
        </div>
        <div className="tech-item">
          <FaCuttlefish className="icon" />
          <span>C++</span>
        </div>
    
      </div>
    </div>
  );
};

export default Tech;
