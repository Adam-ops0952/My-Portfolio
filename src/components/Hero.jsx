import React from "react";
import "../Styles/Hero.css";
import Avatar01 from "../assets/Avatar01.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Hello I'm <span>HASSAN</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p>
            Building modern, responsive, and user-friendly web applications
            with React.js, Next.js, and Tailwind CSS.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>

        <div className="hero-center">
          <img className="Hero-avatar" src={Avatar01} alt="" />

          <div className="speech-bubble">HI!</div>
        </div>

        <div className="hero-right">
          <div className="stats-card">
            <div className="stat">
              <span>Experience</span>
              <strong>2+ Years</strong>
            </div>

            <div className="stat">
              <span>Projects</span>
              <strong>20+</strong>
            </div>

            <div className="stat">
              <span>Clients</span>
              <strong>30+</strong>
            </div>

            <div className="stat">
              <span>Availability</span>
              <strong className="available">Available for Work</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;