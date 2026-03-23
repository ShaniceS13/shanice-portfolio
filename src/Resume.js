import React from "react";
import "./Resume.css";
import FadeInSection from "./FadeInSection";

export default function Resume() {
  return (
    <FadeInSection delay={120}>
      <section className="resume section" id="resume">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <span className="sectiin-count">Experience & Education</span>
        </div>

        <div className="resume-grid">
          <div className="resume-col">
            <h3 className="resume-col-title">Skills</h3>
            <ul className="resume-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Git & GitHub</li>
              <li>API Integration</li>
              <li>UI/UX Awareness</li>
            </ul>
          </div>

          <div className="resume-col">
            <h3 className="resume-col-title">Education</h3>
            <div className="resume-edu-item">
              <p className="resume-edu-degree">B. Sc. Molecular Biology</p>
              <p className="resume-edu-school">Kennesaw State University</p>
            </div>

            <div className="resume-edu-item">
              <p className="resume-edu-degree">React + Frontend Development</p>
              <p className="resume-edu-school">SheCodes Foundation</p>
            </div>
          </div>

          <div className="resume-col">
            <h3 className="resume-col-title">Currently</h3>
            <div className="resume-edu-item">
              <p className="resume-edu-degree">Open to junior frontend roles</p>
              <p className="resume-edu-school">
                Remote or hybrid · Atlanta, GA
              </p>
            </div>

            <div className="resume-edu-item">
              <p className="resume-edu-degree">
                Pursuing Computational biology
              </p>
              <p className="resume-edu-school">Where code and science meet</p>
            </div>
          </div>
        </div>

        <div className="resume-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            View on PDF
          </a>
          <a
            href="/resume.pdf"
            download={"shanice-solomon-resume.pdf"}
            className="btn primary"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>
      </section>
    </FadeInSection>
  );
}
