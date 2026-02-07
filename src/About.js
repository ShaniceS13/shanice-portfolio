import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="sectionTitle">About</h3>

      <div className="card">
        <p className="cardText">
          I’m a front-end developer learning through SheCodes, focused on
          building clean, modern websites that are professional. I love turning
          ideas into responsive interfaces that are easy to use and visually
          polished.
        </p>

        <div className="chips">
          <span className="chip">React</span>
          <span className="chip">JavaScript</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">Bootstap</span>
        </div>
      </div>
    </section>
  );
}
