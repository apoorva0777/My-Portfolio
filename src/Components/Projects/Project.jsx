import React from "react";
import "./Project.css"; // Import CSS for Project styling
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons from react-icons/fa

const Project = () => {
  return (
    <div id="project" className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Real Time Chat Application</h3>
          <p>
            Realtime chat app with websockets using Node.js, Express and
            Socket.io with Vanilla JS on the frontend with a custom UI
          </p>
          <div className="project-links">
            <a
              href="https://github.com/apoorva0777/Realtime-ChatApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <h3>YumYard-A restaurant website</h3>
          <p>This website, crafted with clean HTML and elegant CSS, provides a seamless and visually appealing journey through our restaurant’s offerings. Discover our mouth-watering menu, learn about our story, and make reservations effortlessly. Designed with user experience in mind, YumYard ensures that every visit to our site is as delightful as dining with us. Come, explore, and taste the magic of YumYard!</p>
          <div className="project-links">
            <a
              href="https://github.com/apoorva0777/YumYard-Restaurant-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://yumyardrestro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <h3>Real Time Chat Application</h3>
          <p>
            Realtime chat app with websockets using Node.js, Express and
            Socket.io with Vanilla JS on the frontend with a custom UI
          </p>
          <div className="project-links">
            <a
              href="https://github.com/apoorva0777/Realtime-ChatApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://chatapp-rd6j.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>

        <div className="project-item">
          <h3>Real Time Chat Application</h3>
          <p>
            Realtime chat app with websockets using Node.js, Express and
            Socket.io with Vanilla JS on the frontend with a custom UI
          </p>
          <div className="project-links">
            <a
              href="https://github.com/apoorva0777/Realtime-ChatApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Project;
