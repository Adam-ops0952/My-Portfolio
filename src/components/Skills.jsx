import "../Styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaLink,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", percent: 95, icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS", percent: 90, icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", percent: 90, icon: <FaJs />, color: "#F7DF1E" },

    { name: "React.js", percent: 85, icon: <FaReact />, color: "#61DAFB" },
    { name: "Python", percent: 80, icon: <FaPython />, color: "#3776AB", },
    { name: "Django", percent: 85, icon: <SiDjango />, color: "#092E20",},
    { name: "PostgreSQL", percent: 75, icon: <SiPostgresql />, color: "#336791",},
    { name: "MySQL", percent: 80, icon: <SiMysql />, color: "#4479A1", },
    { name: "REST APIs", percent: 80, icon: <FaLink />, color: "#7B61FF",},
    { name: "Tailwind CSS", percent: 90, icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "Git", percent: 85, icon: <FaGitAlt />, color: "#F05032" },
  ];

  return (
    <section className="skills-section">
      <div className="section-title">
        <h5>MY SKILLS</h5>
        <h2>Technologies I Master</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-top">
              <span
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>

              <span>{skill.name}</span>

              <span>{skill.percent}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;