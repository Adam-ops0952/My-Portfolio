import { useEffect, useState } from "react";
import "../Styles/Services.css";

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/service/`
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
        <section className="services-section">
            <h1 className="section-title">Our Services</h1>

            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;