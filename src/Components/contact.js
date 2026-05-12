import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mgoddgjz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>

        {status && (
          <p
            style={{
              marginTop: "18px",
              textAlign: "center",
              color: "#7A52E6",
              fontWeight: "600",
            }}
          >
            {status}
          </p>
        )}

        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:saimashaikh0231@gmail.com">
              saimashaikh0231@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/saimashaikh30"
              target="_blank"
              rel="noreferrer"
            >
              github.com/saimashaikh30
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/saima-shaikh30/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/saima-shaikh30
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;