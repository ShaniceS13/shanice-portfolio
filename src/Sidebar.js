import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import headshot from "./assets/headshot.png";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleScroll(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
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
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <button
        className="menuToggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}{" "}
      </button>

      {menuOpen && (
        <div className="menuOverlay" onClick={() => setMenuOpen(false)} />
      )}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="profile">
          <div className="avatar">
            <img src={headshot} alt="Shanice Solomon" />
          </div>
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
    </>
  );
}
