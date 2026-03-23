import React from "react";
import "./About.css";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection delay={80}>
      <section className="about" id="about">
        <div className="about-label">
          <span>About</span>
        </div>

        <div className="about-content">
          <p className="about-intro">
            From the shores of <em>Roatan</em> to the React ecosystem I bring a
            scientist's curiosity and a creator's eye to every project
          </p>

          <div className="about-body">
            <p>
              {" "}
              I studied Molecular Biology at Kennesaw State University, not
              because I planned to end up in tech, but because I've always been
              drawn to understanding how things work. Then one day I stumbled
              across a random "Hello World" video, and something clicked. I went
              straight to Google, typed "learn how to code," and enrolled in my
              first SheCodes workshop that same night.
            </p>
            <p>
              That curiosity turned into a full-on passion. I'm now a
              bootcamp-certified front-end developer building clean, purposeful
              web experiences and working toward computational biology, where
              code and science finally meet.
            </p>
            <p>
              I believe every project I take on is an assignment, not just a
              contract. Believer. Mom. Developer. Still becoming and okay with
              that.
            </p>
          </div>

          <div className="about-footer">
            <div className="about-tags">
              <span className="about-tag">React</span>
              <span className="about-tag">JavaScript</span>
              <span className="about-tag">HTML & CSS</span>
              <span className="about-tag">Bootstrap</span>
              <span className="about-tag">Git & GitHub</span>
              <span className="about-tag">Computational Biology</span>
            </div>

            <div className="about-currently">
              <span className="about-currently-label">Currently</span>
              <span className="about-currently-value">
                Open to junior frontend roles · Remote or hybrid
              </span>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
