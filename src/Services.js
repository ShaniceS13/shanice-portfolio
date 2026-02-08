import React from "react";
import "./Services.css";
import FadeInSection from "./FadeInSection";

export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      desc: "Clean, high-converting landing pages for brands, products, or events mobile-friendly and polished.",
    },
    {
      title: "React Websites",
      desc: "Modern React sites with reusable components, smooth navigation, and a professional layout.",
    },
    {
      title: "Website Refresh",
      desc: "Give your existing site a glow-up: improved styling, better spacing, and responsive design fixes.",
    },
  ];

  return (
    <FadeInSection delay={200}>
      <section className="section" id="services">
        <h3 className="sectionTitle">Services</h3>

        <div className="servicesGrid">
          {services.map((service) => {
            return (
              <div className="serviceCard" key={service.title}>
                <h4 className="serviceTitle">{service.title}</h4>
                <p className="serviceDesc">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </FadeInSection>
  );
}
