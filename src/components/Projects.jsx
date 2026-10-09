import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import "../Styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/projects/`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="projects-section">
      <div className="section-header">
        <span>FEATURED PROJECTS</span>
        <h2>Some of My Recent Work</h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}
                        transition={{
                          duration: 0.6
                        }} className="project-card">
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <img src={`${API_URL}${project.image}`} alt="" />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {project.project_url}{ } | { }
                  View Project →
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;