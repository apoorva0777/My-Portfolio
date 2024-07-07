import React from "react";
import "./Project.css"; // Import CSS for Project styling
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons from react-icons/fa

const Project = () => {
  return (
    <div className="project-section">
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
          <h3>Project Name 1</h3>
          <p>Description of Project 1.</p>
          <div className="project-links">
            <a
              href="https://github.com"
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
