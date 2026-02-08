import React from "react";
import "./Contact.css";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <FadeInSection delay={240}>
      <section className="section" id="contact">
        <h3 className="sectionTitle">Contact</h3>

        <div className="contactCard">
          <p className="contactKicker">Let's work together 🧡</p>

          <h4 className="contactHeadline">
            Have an idea or need a website refresh?
          </h4>

          <p className="contactText">
            I'd love to hear about project. The fastest way to reach me is by
            email: <br />
            <a
              href="mailto:solomonshanice00@gmail.com"
              className="contactEmail"
            >
              solomonshanice00@gmail.com
            </a>
          </p>

          <div className="call-to-actionRow">
            <a href="mailto:solomonshanice00@gmail.com" className="btn primary">
              Email Me 📩
            </a>

            <a
              href="https://github.com/ShaniceS13"
              className="btn ghost"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
