import "../Styles/Contact.css";

function Contact() {
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

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" required />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;