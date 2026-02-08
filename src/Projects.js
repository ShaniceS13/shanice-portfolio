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
      title: "React Weather App",
      description: "React weather app with live API and a 5-day forecast.",
      tech: "React • API • Axios • CSS",
      github: "https://github.com/ShaniceS13/react-weather-app",
      live: "https://startling-zabaione-3299e4.netlify.app/",
      image: weatherImg,
    },
    {
      title: "Dictionary App",
      description:
        "A React dictionary app where users can search any word and view definitions and parts of speech in a clean layout.",
      tech: "React • API • Axios • CSS • Bootstrap",
      github: "https://github.com/ShaniceS13/dictionary-project",
      live: "https://neon-manatee-bd2d44.netlify.app/",
      image: dictionaryImg,
    },
    {
      title: "Welcome to Roatan",
      description:
        "A tourism landing site showcasing Roatán and a selection of Elite Roatan Tours, with tour highlights and island photography.",
      tech: "HTML • CSS • JavaScript • Bootstrap",
      github: "https://github.com/ShaniceS13/my-roatan-tours-website",
      live: "https://effervescent-twilight-b025bf.netlify.app/",
      image: eliteTourImg,
    },
    {
      title: "Caribbean Recipe Generator",
      description:
        "Type any ingredient and generate a Caribbean-inspired recipe featuring that ingredient.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/ShaniceS13/recipe-generator",
      live: "https://ss-ai-recipes-generator.netlify.app/",
      image: recipeImg,
    },
  ];

  return (
    <FadeInSection delay={160}>
      <section className="section" id="projects">
        <h3 className="sectionTitle">Projects</h3>

        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div className="projectCard" key={project.title}>
                <img
                  className="projectImage"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />

                <h4 className="projectTitle">{project.title}</h4>
                <p className="projectDesc">{project.description}</p>
                <p className="projectTech">{project.tech}</p>

                <div className="projectLinks">
                  <a
                    className="link"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </FadeInSection>
  );
}
