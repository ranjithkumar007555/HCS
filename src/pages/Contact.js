import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    const phone = formData.phone.replace(/\D/g, "");

    if (phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    const message = `
Hello Home Comfort Solution,

I would like to enquire about your service.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service || "Not specified"}
Location: ${formData.location || "Not specified"}

Message:
${formData.message || "No additional message"}

Thank you.
    `.trim();

    const whatsappNumber = "919025952541";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-page">

      <section className="page-banner">

        <span>GET IN TOUCH</span>

        <h1>
          Let's Talk About
          <br />
          Your Service Needs
        </h1>

        <p>
          Send your enquiry and contact us
          through WhatsApp.
        </p>

      </section>

      <section className="section contact-section">

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="section-label">
              CONTACT US
            </span>

            <h2>
              We're Here To
              <br />
              Help You.
            </h2>

            <p>
              Have a service enquiry?
              Reach out to Home Comfort Solution
              for your home appliance service needs.
            </p>

            <div className="contact-info-item">

              <span>📞</span>

              <div>
                <small>Phone Number</small>

                <a href="tel:9940070057">
                  9940070057
                </a>
              </div>

            </div>

            <div className="contact-info-item">

              <span>📍</span>

              <div>
                <small>Company Address</small>

                <p>
                  Bala Ambookan Nagar RD,
                  S.Kolathur, Bala Ambookan Nagar,
                  Madipakkam, Chennai,
                  Tamil Nadu - 600091.
                </p>
              </div>

            </div>

            <div className="contact-info-item">

              <span>🕒</span>

              <div>
                <small>Service Locations</small>

                <p>
                  Pallikaranai, Medavakkam,
                  Madipakkam, Chromepet,
                  Kovilambakkam, Velachery,
                  Vaanuvampet.
                </p>
              </div>

            </div>

            <div className="social-links">

              <h3>Follow Us</h3>

              {/* Replace the # links with actual URLs */}
              <a href="https://www.facebook.com/share/1FJvdnNhbv/" target="_blank" rel="noreferrer">
                Facebook
              </a>

              <a href="https://www.instagram.com/home.comfortsolutions?stkn=ZnZlNzgzZW9paXhu" target="_blank" rel="noreferrer">
                Instagram
              </a>

            </div>

          </div>

          {/* Enquiry Form */}
          <div className="contact-form-container">

            <h2>Send Your Enquiry</h2>

            <p>
              Fill in your details and send
              your enquiry directly to WhatsApp.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Service</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="AC Service">
                    AC Service
                  </option>

                  <option value="Fridge Service">
                    Fridge Service
                  </option>

                  <option value="Washing Machine Service">
                    Washing Machine Service
                  </option>

                  <option value="RO Service">
                    RO Service
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Service Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your service requirement..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn primary-btn form-submit"
              >
                Send via WhatsApp ↗
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;