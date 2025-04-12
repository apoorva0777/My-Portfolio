import React from "react";
import "./Certificate.css";

const certificates = [
  {
    title: "Complete Interview Preparation",
    issuer: "GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/136361e3c7383ad4018be749540c73b9.pdf",
    image: "/images/certificate1.jpg",
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    link: "https://olympus.mygreatlearning.com/courses/56743/certificate",
    image: "/images/certificate2.jpg",
  },
  {
    title: "Front End Development - HTML",
    issuer: "Great Learning",
    link: "https://olympus.mygreatlearning.com/courses/13961/certificate",
    image: "/images/certificate3.jpg",
  },
  {
    title: "CSS",
    issuer: "Great Learning",
    link: "https://olympus.mygreatlearning.com/courses/49631/certificate",
    image: "/images/certificate4.jpg",
  },
  {
    title: "JavaScript",
    issuer: "Great Learning",
    link: "https://olympus.mygreatlearning.com/courses/55631/certificate",
    image: "/images/certificate5.jpg",
  },
];

const Certificate = () => {
  return (
    <div id="certificate" className="certificate-section">
      <h1>CERTIFICATES</h1>
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div className="certificate-item" key={index}>
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h3>{cert.title}</h3>
            <p>Issued by: {cert.issuer}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
