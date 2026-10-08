import "../Styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(
          "https://api.homecomfot.com/api/contact/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } catch (error) {
        console.error(error);
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
            <p>Accra, Ghana</p>
          </div>

          <div className="info">
            <h3>📧 Email</h3>
            <p>info@mywebsite.com</p>
          </div>

          <div className="info">
            <h3>📞 Phone</h3>
            <p>+233 20 123 4567</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({...formData, name: e.target.value})
            }
          />

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({...formData, email: e.target.value})
            }
          />

          <input
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({...formData, subject: e.target.value})
            }
          />

          <input
            type="text"
            value={formData.message}
            onChange={(e) =>
              setFormData({...formData, message: e.target.value})
            }
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;