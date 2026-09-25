
function Services() {
  const services = [
    {
      icon: "❄️",
      title: "AC Service & Repair",
      description:
        "Keep your air conditioner working efficiently with professional cleaning, maintenance and repair support.",
      points: [
        "AC cleaning and maintenance",
        "Cooling-related service support",
        "General AC inspection",
        "Repair and service enquiries"
      ]
    },
    {
      icon: "🧊",
      title: "Refrigerator Service",
      description:
        "Reliable refrigerator maintenance and repair support to help keep your appliance functioning properly.",
      points: [
        "Refrigerator inspection",
        "Cooling-related service support",
        "General maintenance",
        "Repair service enquiries"
      ]
    },
    {
      icon: "🧺",
      title: "Washing Machine Service",
      description:
        "Service support for washing machine maintenance and common appliance repair requirements.",
      points: [
        "Washing machine inspection",
        "Maintenance support",
        "General repair enquiries",
        "Home appliance service"
      ]
    },
    {
      icon: "💧",
      title: "RO Water Purifier Service",
      description:
        "RO water purifier maintenance and repair support for everyday household requirements.",
      points: [
        "RO maintenance",
        "Filter-related service enquiries",
        "Water purifier inspection",
        "General repair support"
      ]
    }
  ];

  return (
    <div className="services-page">

      <section className="page-banner">

        <span>OUR SERVICES</span>

        <h1>
          Home Appliance
          <br />
          Service & Support
        </h1>

        <p>
          Professional service support for your
          essential home appliances.
        </p>

      </section>

      <section className="section">

        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Our Service Details</h2>
        </div>

        <div className="service-detail-grid">

          {services.map((service, index) => (
            <div className="service-detail-card" key={index}>

              <div className="large-service-icon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <ul>
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    ✓ {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </section>

      <section className="service-note">

        <h2>Service Warranty</h2>

        <p>
          Warranty support is subject to the applicable
          material, product and service conditions.
          Please confirm warranty terms during your enquiry.
        </p>

      </section>

    </div>
  );
}

export default Services;