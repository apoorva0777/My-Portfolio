import React, { useEffect } from "react";
import "./Education.css";
import Gaurav_logo from "../../assets/Gaurav_logo.jpg";
import LPU_logo from "../../assets/LPU_logo.png";

const Education = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.subcontainer');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 150); // Delay each element
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="education" className="container">
      <h1>EDUCATION</h1>
      <div className="subcontainer">
        <img src={Gaurav_logo} alt="Gaurav Memorial International School" />
        <div>
          <h2>Higher Secondary School</h2>
          <h3>Gaurav Memorial International School, Kanpur</h3>
          <p>Percentage: </p>
        </div>
      </div>
      <div className="subcontainer">
        <img src={Gaurav_logo} alt="Gaurav Memorial International School" />
        <div>
          <h2>Senior Secondary School</h2>
          <h3>Gaurav Memorial International School, Kanpur</h3>
          <p>Percentage: </p>
        </div>
      </div>
      <div className="subcontainer">
        <img src={LPU_logo} alt="Lovely Professional University" />
        <div>
          <h2>Bachelor of Technology - BTech, CSE</h2>
          <h3>Lovely Professional University, Punjab</h3>
          <p>CGPA: </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
