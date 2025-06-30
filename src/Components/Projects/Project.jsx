import React from "react";
import "./Project.css"; 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 

const Project = () => {
  return (
    <div id="project" className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
  

        <div className="project-item">
          <img src="/images/medikart.png" alt="Real Time Chat Application" className="project-image" />
          <h3>MediKart - A Pharmacy Web App</h3>
          <p>
            MediKart is a responsive pharmacy e-commerce platform built using the MERN stack. It features secure user authentication, product browsing with search and filtering, shopping cart functionality, and Razorpay integration for online payments.
          </p>
          <div className="project-links">
            <a href="https://github.com/apoorva0777/MediKart-Project" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://medikart-project.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src="/images/verbobox.png" alt="VerboX" className="project-image" />
          <h3>VerboX - A Modern Dictionary</h3>
          <p>
            VerboX is a modern dictionary built with React ,offering precise definitions, accurate pronunciations, and in-depth word exploration. Users can bookmark their favorite words for easy reference, making learning new vocabulary engaging and efficient.
          </p>
          <div className="project-links">
            <a href="https://github.com/apoorva0777/VerboX" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://verbox.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src="/images/chatapp.png" alt="Real Time Chat Application" className="project-image" />
          <h3>WeChat-Real Time Chat Application</h3>
          <p>
            This project is a real-time chat application built with Node.js, Express, and Socket.io on the backend, and Vanilla JavaScript for the frontend. The application allows multiple users to communicate with each other in real-time, providing a seamless and interactive chat experience.
          </p>
          <div className="project-links">
            <a href="https://github.com/apoorva0777/Realtime-ChatApp" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://chatapp-rd6j.onrender.com" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>



        <div className="project-item">
          <img src="/images/yumyard.png" alt="YumYard" className="project-image" />
          <h3>YumYard - A Restaurant Website</h3>
          <p>
            This website, crafted with clean HTML and elegant CSS, provides a seamless and visually appealing journey through our restaurant’s offerings. Discover our mouth-watering menu, learn about our story, and make reservations effortlessly.
          </p>
          <div className="project-links">
            <a href="https://github.com/apoorva0777/YumYard-Restaurant-website" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://yumyardrestro.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src="/images/portfolio.png" alt="Personal Portfolio" className="project-image" />
          <h3>Personal Portfolio</h3>
          <p>
            A responsive personal portfolio website built using React and TailwindCSS. It showcases my projects, skills, and contact details with modern UI components and smooth scroll navigation. Includes a contact form with email functionality.
          </p>
          <div className="project-links">
            <a href="https://github.com/apoorva0777/My-Portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://apoorvashukla.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Project;
