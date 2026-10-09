import { useEffect, useState } from "react";
import "../Styles/Services.css";
import { motion } from "framer-motion";

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/services/?t=${Date.now()}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch services");
                }

                const data = await response.json();
                setServices(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading services...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h3>{error}</h3>
            </div>
        );
    }

    return (
        <section className="services-page">
            <div className="services-header">
                <span>WHAT I OFFER</span>
                <h1>My Services</h1>
                <p>Building modern, scalable and secure applications.</p>

            </div>
            

            <div className="services-grid">
                {services.map((service) => (
                    <motion.div 
                        className="service1-card" 
                        key={service.id} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                        <div className="service-icon">🌐</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;