import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919940070057";

    const message = `
Hello Home Comfort Solution,

I would like to enquire about your service.

Name: ${formData.name}
Phone Number: ${formData.phone}
Service: ${formData.service}
Location: ${formData.location}

Message:
${formData.message}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">

        <p>GET IN TOUCH</p>

        <h1>
          Contact <span>Us</span>
        </h1>

        <p>
          Need a home appliance service? Send us your enquiry.
        </p>

      </section>


      {/* Contact Section */}
      <section className="contact-section">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Home Comfort Solution</h2>

          <p>
            We provide professional home appliance service
            with quality workmanship and customer satisfaction.
          </p>


          <div className="contact-item">

            <span>📞</span>

            <div>
              <h4>Contact Number</h4>

              <a href="tel:9940070057">
                9940070057
              </a>
            </div>

          </div>


          <div className="contact-item">

            <span>📍</span>

            <div>
              <h4>Location</h4>

              <p>
                Bala Ambookan Nagar RD,<br />
                S.Kolathur, Bala Ambookan Nagar,<br />
                Madipakkam, Chennai,<br />
                Tamil Nadu - 600091.
              </p>
            </div>

          </div>


          <div className="contact-item">

            <span>🛡️</span>

            <div>
              <h4>Warranty</h4>

              <p>
                1 Year warranty based on material.
              </p>
            </div>

          </div>

        </div>


        {/* Enquiry Form */}
        <div className="contact-form-box">

          <h2>Send an Enquiry</h2>

          <p>
            Fill in the details and send your enquiry directly through WhatsApp.
          </p>


          <form onSubmit={handleSubmit}>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />


            {/* Service */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Service
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


            {/* Location */}
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Service Location
              </option>

              <option value="Pallikaranai">
                Pallikaranai
              </option>

              <option value="Medavakkam">
                Medavakkam
              </option>

              <option value="Madipakkam">
                Madipakkam
              </option>

              <option value="Chromepet">
                Chromepet
              </option>

              <option value="Kovilambakkam">
                Kovilambakkam
              </option>

              <option value="Velachery">
                Velachery
              </option>

              <option value="Vaanuvampet">
                Vaanuvampet
              </option>

            </select>


            {/* Message */}
            <textarea
              name="message"
              placeholder="Enter your enquiry"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>


            {/* WhatsApp Button */}
            <button type="submit">
              Send Enquiry on WhatsApp
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Contact;