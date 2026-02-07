import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">Headshot</div>
        <h1 className="name">Shanice Solomon</h1>
        <p className="title">Front-end Developer</p>

        <div className="socials">
          <a className="GitHub-link" href="#">
            GitHub
          </a>
          <a className="LinkedIn-link" href="#">
            LinkedIn
          </a>
          <a className="Email-link" href="#">
            Email
          </a>
        </div>
      </div>

      <nav className="navigation-bar">
        <button className="navLink" onClick={() => handleScroll("home")}>
          Home
        </button>
        <button className="navLink" onClick={() => handleScroll("about")}>
          About
        </button>
        <button className="navLink" onClick={() => handleScroll("resume")}>
          Resume
        </button>
        <button className="navLink" onClick={() => handleScroll("projects")}>
          Projects
        </button>
        <button className="navLink" onClick={() => handleScroll("services")}>
          Services
        </button>
        <button className="navLink" onClick={() => handleScroll("contact")}>
          Contact
        </button>
      </nav>
    </aside>
  );
}

function handleScroll(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    return null;
  }
}
