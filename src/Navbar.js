import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScroll(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo" onClick={() => handleScroll("home")}>
        Shanice Solomon
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "resume", "projects", "services", "contact"].map(
          (s) => (
            <li key={s}>
              <button onClick={() => handleScroll(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ),
        )}
      </ul>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`burger ${menuOpen ? "open" : ""}`} />
      </button>
    </nav>
  );
}
