import React from "react";
import "./Home.css";
import heroPhoto from "./assets/headshot.png";

export default function Home() {
  function handleScroll(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Front-end Developer · Roatan, Honduras
        </p>

        <h1 className="hero-headline">
          Build by faith. <br /> Coded with <em>purpose.</em>
          <br /> Designed to last.
        </h1>

        <p className="hero-sub">
          I'm Shanice! A developer with a biology background and an island soul,
          building clean, meaningful web experiences.
        </p>

        <div className="hero-ctas">
          <button
            className="btn primary"
            onClick={() => handleScroll("projects")}
          >
            View My Work
          </button>
          <button className="btn ghost" onClick={() => handleScroll("contact")}>
            Let's Connect
          </button>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/ShaniceS13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="hero-social-dot" />
          <a
            href="https://www.linkedin.com/in/shanice-solomon"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className="hero-social-dot" />
          <a href="mailto:solomonshanice00@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroPhoto} alt="Shanice Solomon" className="hero-img" />
        <div className="hero-img-overlay" />
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
