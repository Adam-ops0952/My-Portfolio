import "../Styles/Home.css";
import Hero from "../components/Hero.jsx";
import Services1 from "../components/Services.jsx";
import Skills from "../components/Skills";


function Home() {
  return (
    <div className="home">
      <section className="hero">
        <Hero />
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Lightning-fast performance and modern technology.</p>
        </div>

        <div className="feature-card">
          <h3>Reliable</h3>
          <p>Trusted solutions designed for long-term success.</p>
        </div>

        <div className="feature-card">
          <h3>Secure</h3>
          <p>Your data is protected with industry-standard security.</p>
        </div>
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Services1 />
      </section>
    </div>
  );
}

export default Home;