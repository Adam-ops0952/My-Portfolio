import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About MyWebsite</h1>
        <p>
          We’re dedicated to building helpful, fast, and reliable solutions for
          growing businesses.
        </p>
        <p className="about-small">
          Our goal is simple: make technology easy to use and dependable to rely
          on.
        </p>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Provide innovative solutions that help businesses improve performance
            and reach their goals.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Us</h2>
          <p>
            We focus on clear communication, strong delivery, and long-term
            support.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Do</h2>
          <p>
            Web development, performance improvements, and modern UI experiences
            that look great on every device.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;