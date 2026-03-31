import React from "react";
import "./Services.css";
import FadeInSection from "./FadeInSection";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Landing Pages",
      desc: "Clean, high-converting pages for brands, products, and events. Mobile-first, polished, and built to make a lasting impression.",
    },
    {
      num: "02",
      title: "React Websites",
      desc: "Modern component-driven sites with smooth navigation, reusable architecture, and a professional layout that scales.",
    },
    {
      num: "03",
      title: "Website Refresh",
      desc: "Give your existing site a new-life. Improved styling, better spacing, responsive fixes, and a design that finally feels like you",
    },
    {
      num: "04",
      title: "Virtual Assistant",
      desc: "Inbox management, scheduling, data entry, social media support, and admnistrative tasks handled with accuracy and  care",
    },
  ];

  return (
    <FadeInSection delay={200}>
      <section className="services" id="services">
        <div className="services-inner">
          <div className="section-header services-header">
            <h2 className="section-title services-title">Services</h2>
            <span className="section-count services-count">04 Offerings</span>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <span className="service-num">{service.num}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-footer">
            <p className="services-footer-text">
              Available for freelance projects and open to junior frontend roles
            </p>
            <div className="services-footer-links">
              <a
                href="https://www.fiverr.com/vabyshanice/be-your-reliable-virtual-assistant-for-inbox-calendar-and-admin-tasks?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=f57c0200653b47daab73356eb2523fcc&context=recommendation&pckg_id=1&pos=2&context_alg=recently_viewed&seller_online=true&imp_id=dd662115-dd4d-409e-8367-6327e9b57077"
                target="_blank"
                rel="noreferrer"
                className="btn services-btn-fiverr"
              >
                View Fiverr Profile ↗{" "}
              </a>

              <a
                href="mailto:solomonshanice00@gmail.com"
                className="btn services-btn-email"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
