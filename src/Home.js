import React, { useEffect, useState } from "react";
import "./Home.css";
import FadeInSection from "./FadeInSection";
import heroPhoto from "./assets/hero-photo.png";

export default function Home() {
  const [hideHeroPhoto, setHideHeroPhoto] = useState(false);

  useEffect(() => {
    function onScroll() {
      setHideHeroPhoto(window.scrollY > 40); // fades once you start scrolling
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <FadeInSection delay={0}>
      <section className="section-hero" id="home">
        <div className="heroShell">
          <div className={`heroBgPhoto ${hideHeroPhoto ? "hide" : ""}`}>
            <img src={heroPhoto} alt="Shanice" />
          </div>

          <div className="heroTop">
            <div className="heroText">
              <p className="kicker">Hi, I'm Shanice ✨</p>

              <h2 className="headline">
                I build modern, beautiful web experiences
              </h2>

              <p className="subhead">
                Professional, approachable, and detail-focused. I love turning
                ideas into clean, responsive interfaces.
              </p>

              <div className="call-to-actionRow">
                <button
                  className="btn primary"
                  onClick={() => handleScroll("projects")}
                >
                  View Projects
                </button>
                <button
                  className="btn ghost"
                  onClick={() => handleScroll("contact")}
                >
                  Contact me{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

function handleScroll(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
