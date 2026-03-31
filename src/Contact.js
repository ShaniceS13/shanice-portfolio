import React from "react";
import "./Contact.css";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <FadeInSection delay={240}>
      <section className="contact section" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-eyebrow">
              <span className="contact-eyebrow-line" /> Let's work together
            </p>

            <h2 className="contact-headline">
              Let's build something <em>beautiful</em> together 💕
            </h2>

            <p className="contact-sub">
              Have a project in mind or a role you think I'd be a great fit for?
              I'd love to hear about it. Reach out and let's make it real
            </p>

            <a
              href="mailto:solomonshanice00@gmail.com"
              className="contact-email"
            >
              solomonshanice00@gmail.com
            </a>

            <div className="contact-ctas">
              <a
                href="mailto:solomonshanice00@gmail.com"
                className="btn primary"
              >
                Email me 📩
              </a>
              <a
                href="https://www.linkedin.com/in/shanice-solomon"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-faith">
              <p className="contact-verse">
                "Commit to the Lord whatever you do, and He will establish your
                plans"
              </p>
              <span className="contact-verse-ref">Proverbs 16:3</span>
            </div>

            <div className="contact-details">
              <div className="contact-detail-row">
                <span className="contact-detail-label">Based in</span>
                <span className="contact-detail-value">Atlanta, GA</span>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-label">Originally from</span>
                <span className="contact-detail-value">Roatan, Honduras</span>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-label">Available for</span>
                <span className="contact-detail-value">
                  Remote or hybrid roles · Freelance projects
                </span>
              </div>

              <div className="contact-detail-row">
                <span className="contact-detail-label">GitHub</span>

                <a
                  href="https://github.com/ShaniceS13"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail-link"
                >
                  github.com/ShaniceS13 ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span className="contact-footer-name">Shanice Solomon</span>
          <span className="contact-footer-copy">
            Built with purpose · Atlanta, GA · {new Date().getFullYear()}
          </span>
        </div>
      </section>
    </FadeInSection>
  );
}
