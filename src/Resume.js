import React from "react";
import "./Resume.css";
import FadeInSection from "./FadeInSection";

export default function Resume() {
  return (
    <FadeInSection delay={120}>
      <section className="section" id="resume">
        <h3 className="sectionTitle">Resume</h3>
        <div className="resume-card">
          <div className="resume-grid">
            <div>
              <h4 className="miniTitle">Skills</h4>
              <ul className="resume-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
            <div>
              <h4 className="miniTitle">Education</h4>
              <ul className="resume-list">
                <li>B.Sc. Molecular Biology</li>
                <li>SheCodes Junior Developer Bootcamp </li>
              </ul>
            </div>
          </div>

          <div className="resumeButtons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
            >
              View PDF 👀
            </a>

            <a
              href="/resume.pdf"
              download="Shanice-Solomon-Resume.pdf"
              className="btn primary"
              rel="noreferrer"
            >
              Download PDF 📄
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
