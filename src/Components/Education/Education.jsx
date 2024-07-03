import React from "react";
import "./Education.css";
import Gaurav_logo from "../../assets/Gaurav_logo.jpg";
import LPU_logo from "../../assets/LPU_logo.png";

const Education = () => {
  return (
    <div>
      <div className="container">
        <h1>EDUCATION</h1>
        <div className="subcontainer">
          <img src={Gaurav_logo} alt="" />
          <div>
            <h2>Higher Secondary school</h2>
            <h3>Gaurav Memorial International School , Kanpur</h3>
            <p>Percentage : </p>
          </div>
        </div>
        <div className="subcontainer">
          <img src={Gaurav_logo} alt="" />
          <div>
            <h2>Senior Secondary school</h2>
            <h3>Gaurav Memorial International School , Kanpur</h3>
            <p>Percentage : </p>
          </div>
        </div>
        <div className="subcontainer">
          <img src={LPU_logo} alt="" />
          <div>
            <h2>Bachelor of Technology - BTech, CSE</h2>
            <h3>Lovely Professional University , Punjab</h3>
            <p>CGPA : </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
