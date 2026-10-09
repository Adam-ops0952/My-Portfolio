import { useState } from "react";
import "../Styles/Contact.css";


function Contact() {

  const [buttonStatus, setButtonStatus] = useState("idle");

  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonStatus("sending");

    try {
      const response = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "The message could not be sent."
        );
      }

      setButtonStatus("success");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Return to "Send Message" after 4 seconds
      setTimeout(() => {
        setButtonStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);

      setButtonStatus("error");

      // Return to "Send Message" after 4 seconds
      setTimeout(() => {
        setButtonStatus("idle");
      }, 4000);
    }
  };


  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Whether you have a question,
            feedback, or need assistance, feel free to get in touch.
          </p>

          <div className="info">
            <h3>📍 Address</h3>
            <p>Tamale, Ghana</p>
          </div>

          <div className="info">
            <h3>📧 Email</h3>
            <p>alert@homecomfot.com</p>
          </div>

          <div className="info">
            <h3>📞 Phone</h3>
            <p>+233 20 220 3515</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            placeholder="Name"
            onChange={(e) =>
              setFormData({...formData, name: e.target.value})
            }
          />

          <input
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={(e) =>
              setFormData({...formData, email: e.target.value})
            }
          />

          <input
            type="text"
            value={formData.subject}
            placeholder="Subject"
            onChange={(e) =>
              setFormData({...formData, subject: e.target.value})
            }
          />

          <input
            type="text"
            value={formData.message}
            placeholder="Write message"
            onChange={(e) =>
              setFormData({...formData, message: e.target.value})
            }
          />

          <button
            type="submit"
            disabled={buttonStatus === "sending"}
            className={`submit-button ${buttonStatus}`}
          >
            {buttonStatus === "idle" && "Send Message"}
            {buttonStatus === "sending" && "Sending..."}
            {buttonStatus === "success" && "Message Sent ✓"}
            {buttonStatus === "error" && "Failed. Try Again"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;