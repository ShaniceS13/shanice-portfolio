import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  function handleScroll(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    function onScroll() {
      const sections = [
        "home",
        "about",
        "resume",
        "projects",
        "services",
        "contact",
      ];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // set active section on first load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">Headshot</div>
        <h1 className="name">Shanice Solomon</h1>
        <p className="title">Front-end Developer</p>

        <div className="socials">
          <a
            className="GitHub-link"
            href="https://github.com/ShaniceS13"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="LinkedIn-link"
            href="https://www.linkedin.com/in/shanice-solomon-391041160/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="Email-link" href="mailto:solomonshanice00@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <nav className="navigation-bar">
        <button
          className={`navLink ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleScroll("home")}
        >
          Home
        </button>

        <button
          className={`navLink ${activeSection === "about" ? "active" : ""}`}
          onClick={() => handleScroll("about")}
        >
          About
        </button>

        <button
          className={`navLink ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleScroll("resume")}
        >
          Resume
        </button>

        <button
          className={`navLink ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => handleScroll("projects")}
        >
          Projects
        </button>

        <button
          className={`navLink ${activeSection === "services" ? "active" : ""}`}
          onClick={() => handleScroll("services")}
        >
          Services
        </button>

        <button
          className={`navLink ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleScroll("contact")}
        >
          Contact
        </button>
      </nav>
    </aside>
  );
}
