import React, { useEffect } from "react";

import acImage from "../images/ac-service.jpg";
import fridgeImage from "../images/fridge-service.jpg";
import roImage from "../images/ro-service.jpg";
import washingImage from "../images/washing-machine-service.jpg";

import "./Services.css";

function Services() {

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
      details: [
        "AC general service",
        "AC cleaning",
        "AC maintenance",
        "AC repair",
        "Cooling problem service",
        "AC installation support"
      ]
    },
    {
      title: "Fridge Service",
      image: fridgeImage,
      details: [
        "Refrigerator service",
        "Cooling problem repair",
        "General maintenance",
        "Door and gasket checking",
        "Water leakage checking",
        "Electrical issue checking"
      ]
    },
    {
      title: "Washing Machine Service",
      image: washingImage,
      details: [
        "Washing machine service",
        "Cleaning and maintenance",
        "Water drainage problem",
        "Noise problem checking",
        "Spin problem checking",
        "General repair support"
      ]
    },
    {
      title: "RO Service",
      image: roImage,
      details: [
        "RO service",
        "Filter replacement",
        "RO cleaning",
        "Water flow checking",
        "Water quality related maintenance",
        "General RO repair"
      ]
    }
  ];

  return (
    <main className="services-page">

      <section className="services-header">

        <p>OUR SERVICES</p>

        <h1>
          Home Appliance
          <span> Services</span>
        </h1>

        <p className="services-intro">
          Professional and reliable service for your home appliances.
        </p>

      </section>


      <section className="services-list">

        {services.map((service, index) => (

          <div className="service-detail-card" key={index}>

            <div className="service-detail-image">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>

            <div className="service-detail-content">

              <h2>{service.title}</h2>

              <p>
                We provide careful and reliable service to help
                maintain your appliance performance.
              </p>

              <ul>

                {service.details.map((detail, i) => (
                  <li key={i}>
                    ✓ {detail}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        ))}

      </section>

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


      <section className="service-note">

        <h2>Quality Service You Can Trust</h2>

        <p>
          We focus on providing neat, professional and customer-friendly
          service. Our goal is to solve your appliance problems with
          quality workmanship and suitable materials.
        </p>

        <strong>
          Warranty: 1 Year based on material.
        </strong>

      </section>

    </main>
  );
}

export default Services;