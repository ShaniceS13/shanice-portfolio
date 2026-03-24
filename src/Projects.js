import React from "react";
import "./Projects.css";
import weatherImg from "./assets/weather.png";
import dictionaryImg from "./assets/dictionary.png";
import eliteTourImg from "./assets/elitetour.png";
import recipeImg from "./assets/recipe.png";
import FadeInSection from "./FadeInSection";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "React Weather App",
      description:
        "Live weather data with 5-day forecast, dynamic UI updates, and real-time API calls. Clean, responsive layout built in React",
      tech: "React · API · Axios · CSS ",
      github: "https://github.com/ShaniceS13/react-weather-app",
      live: "https://startling-zabaione-3299e4.netlify.app/",
      image: weatherImg,
    },

    {
      num: "02",
      title: "Dictionary App",
      description:
        "Search any word and instantly view definitions, parts of speech, and usage examples in a clean, minimal layout",
      tech: "React · API · Axios · Bootstrap",
      github: "https://github.com/ShaniceS13/dictionary-project",
      live: "https://neon-manatee-bd2d44.netlify.app/",
      image: dictionaryImg,
    },

    {
      num: "03",
      title: "Landing Page",
      description:
        "A tourism landing site showcasing Roatan and Elite Roatan Tours. Island photography, tour highlights, and warm island energy",
      tech: "HTML · CSS · JavaScript · Bootstrap",
      github: "https://github.com/ShaniceS13/my-roatan-tours-website",
      live: "https://effervescent-twilight-b025bf.netlify.app/",
      image: eliteTourImg,
    },

    {
      num: "04",
      title: "Caribbean Recipe Generator",
      description:
        "Type ANY ingredient and generate an AI-powered Caribbean-inspired recipe. A personal project rooted in island culture",
      tech: "HTML · CSS · JavaScript",
      github: "https://github.com/ShaniceS13/recipe-generator",
      live: "https://ss-ai-recipes-generator.netlify.app/",
      image: recipeImg,
    },
  ];
  return (
    <FadeInSection delay={160}>
      <section className="projects section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Selected Work</h2>
          <span className="section-count">04 Projects</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-img-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-img"
                />
              </div>

              <div className="project-body">
                <div className="project-header">
                  <span className="project-num">{project.num}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Demo <span className="project-link-arrow">↗</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub <span className="project-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
