import "../Styles/Services1.css";
import {
  Code2,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies.",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Responsive Design",
    description:
      "Mobile-first designs that look great on all devices and screen sizes.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Performance Optimization",
    description:
      "Improve website speed and performance for better SEO and user experience.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Website Maintenance",
    description:
      "Ongoing support and maintenance to keep your website running smoothly.",
  },
];

function Services1() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <span>MY SERVICES</span>
        <h2>What I Can Do For You</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services1;