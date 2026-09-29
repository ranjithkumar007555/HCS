import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import acImage from "../images/ac-service.jpg";
import fridgeImage from "../images/fridge-service.jpg";
import roImage from "../images/ro-service.jpg";
import washingImage from "../images/washing-machine-service.jpg";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


import logo from "../components/images/logo.png";

import "./Home.css";

function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const services = [
    {
      title: "AC Service",
      image: acImage,
      description:
        "Professional AC service, maintenance and repair for better cooling and performance."
    },
    {
      title: "Fridge Service",
      image: fridgeImage,
      description:
        "Reliable refrigerator repair and maintenance service for all common issues."
    },
    {
      title: "Washing Machine Service",
      image: washingImage,
      description:
        "Expert washing machine service to keep your appliance working smoothly."
    },
    {
      title: "RO Service",
      image: roImage,
      description:
        "RO water purifier service, maintenance and filter-related solutions."
    }
  ];

  return (
    <main>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            <FaStar /> PROFESSIONAL HOME APPLIANCE SERVICE
          </p>

          <h1>
            Home Comfort
            <span> Solution</span>
          </h1>

          <p className="hero-description">
            Reliable and professional service for all your home appliances.
  We provide quality AC, fridge, washing machine, and RO services.
  Our experienced technicians ensure quick and efficient service.
  We use quality materials and follow proper service procedures.
  Customer satisfaction and reliable service are always our priority.
          </p>

          <div className="hero-buttons">

            <Link to="/contact" className="enquiry-button">
              Enquiry Now
            </Link>

            <a
              href="tel:9940070057"
              className="call-button"
            >
              <FaPhoneVolume />
            </a>

          </div>

        </div>

        <div className="hero-card">

  <img
    src={logo}
    alt="Home Comfort Solution Logo"
    className="quality-logo"
  />

  <h3>Quality Service</h3>

  <p>
    Professional service with experienced technicians
    and quality materials.
  </p>

  <div className="hero-card-line"></div>

  <div className="warranty-icon">
    🛡️
  </div>

  <strong>1 Year Warranty</strong>

  <small>
    Based on material
  </small>

</div>

      </section>


      {/* About Service */}
      <section className="about-section">

        <div className="section-title">

          <p>WHY CHOOSE US</p>

          <h2>
            We Care About Your
            <span> Comfort</span>
          </h2>

        </div>

        <p className="about-text">
          At Home Comfort Solution, we provide professional home appliance
          services with a focus on quality, timely support and customer
          satisfaction. Our team works carefully to provide reliable
          solutions for your appliances.
        </p>

        <div className="features">

          <div className="feature">
            <div>✓</div>
            <h3>Quality Service</h3>
            <p>We provide neat and reliable service.</p>
          </div>

          <div className="feature">
            <div>✓</div>
            <h3>Experienced Work</h3>
            <p>Professional appliance service and repair.</p>
          </div>

          <div className="feature">
            <div>✓</div>
            <h3>Customer Satisfaction</h3>
            <p>Your comfort and satisfaction matter to us.</p>
          </div>

        </div>

      </section>


      {/* Services */}
      <section className="home-services">

        <div className="section-title">

          <p>OUR SERVICES</p>

          <h2>
            Professional Appliance
            <span> Services</span>
          </h2>

        </div>

        <div className="service-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

                <Link to="/contact">
                  Enquire Now →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <Link to="/services" className="view-services">
          View All Services
        </Link>

      </section>


      {/* Locations */}
      <section className="location-section">

        <div className="section-title">

          <p>SERVICE AREAS</p>

          <h2>
           Our Service Locations ⭐
          </h2>

        </div>

        <div className="location-list">

  <span>
    <i className="location-icon">📍</i>
    Pallikaranai
  </span>

  <span>
    <i className="location-icon">📍</i>
    Medavakkam
  </span>

  <span>
    <i className="location-icon">📍</i>
    Madipakkam
  </span>

  <span>
    <i className="location-icon">📍</i>
    Chromepet
  </span>

  <span>
    <i className="location-icon">📍</i>
    Kovilambakkam
  </span>

  <span>
    <i className="location-icon">📍</i>
    Velachery
  </span>

  <span>
    <i className="location-icon">📍</i>
    Vaanuvampet
  </span>

</div>

      </section>


      {/* Warranty */}
      <section className="warranty-section">

  <div className="warranty-content">

    <div className="warranty-icon">
      🛡️
    </div>

    <p>WARRANTY</p>

    <h2>1 Year Warranty</h2>

    <span>
      Warranty applicable based on the material used.
    </span>

  </div>

</section>


      {/* Final CTA */}
      <section className="cta-section">

        <h2>
          Need Home Appliance Service?
        </h2>

        <p>
          Contact us today for professional and reliable service.
        </p>

        <Link to="/contact">
          Get an Enquiry
        </Link>

      </section>

    </main>
  );
}

export default Home;