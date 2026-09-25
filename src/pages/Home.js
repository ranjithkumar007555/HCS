import { Link } from "react-router-dom";
import logo from "../components/images/logo.png"

function Home() {
  const services = [
    {
      icon: "❄️",
      title: "AC Service",
      text: "Professional AC cleaning, maintenance and repair services."
    },
    {
      icon: "🧊",
      title: "Fridge Service",
      text: "Reliable refrigerator repair and maintenance services."
    },
    {
      icon: "🧺",
      title: "Washing Machine",
      text: "Quality washing machine repair and service support."
    },
    {
      icon: "💧",
      title: "RO Service",
      text: "RO water purifier maintenance and repair services."
    }
  ];

  const locations = [
    "Pallikaranai",
    "Medavakkam",
    "Madipakkam",
    "Chromepet",
    "Kovilambakkam",
    "Velachery",
    "Vaanuvampet"
  ];

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            ✦ PROFESSIONAL HOME SERVICES
          </span>

          <h1>
            Comfort At Home.
            <br />
            <span>Quality You Trust.</span>
          </h1>

          <p>
            Your trusted partner for AC, refrigerator,
            washing machine and RO service.
            We deliver reliable home appliance services
            with care and professionalism.
          </p>

          <div className="hero-buttons">

            <Link to="/contact" className="btn primary-btn">
              Book a Service →
            </Link>

            <a href="tel:9025952541" className="btn outline-btn">
              📞 Call Now
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>4+</strong>
              <span>Services</span>
            </div>

            <div>
              <strong>1 Year</strong>
              <span>Material Warranty*</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Service Areas</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-appliance">
            <img className="hero-appliance" 
          src={logo} alt="" />
          </div>

          <div className="floating-card">
            <span>✓</span>
            <div>
              <strong>Quality Service</strong>
              <small>Home Comfort Solution</small>
            </div>
          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="section about-section">

        <div className="section-heading">
          <span>ABOUT US</span>
          <h2>Making Your Home More Comfortable</h2>
        </div>

        <div className="about-content">

          <div className="about-icon">🏠</div>

          <div>
            <h3>Home Comfort Solution</h3>

            <p>
              At Home Comfort Solution, we focus on
              delivering dependable home appliance
              services with care and attention to detail.
              Our goal is to help customers maintain
              their home appliances and enjoy a comfortable
              living environment.
            </p>

            <p>
              From AC servicing to refrigerator,
              washing machine and RO maintenance,
              we provide convenient service support
              for your everyday needs.
            </p>
          </div>

        </div>

      </section>

      {/* Services Preview */}
      <section className="section services-preview">

        <div className="section-heading">
          <span>WHAT WE DO</span>
          <h2>Our Home Services</h2>
          <p>
            Professional support for your essential
            home appliances.
          </p>
        </div>

        <div className="service-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <Link to="/services">
                View Details →
              </Link>

            </div>
          ))}

        </div>

        <div className="center-btn">
          <Link to="/services" className="btn primary-btn">
            Explore All Services
          </Link>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="section why-section">

        <div className="section-heading">
          <span>WHY CHOOSE HCS</span>
          <h2>Service You Can Depend On</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <span>✓</span>
            <h3>Quality Service</h3>
            <p>
              We focus on careful service and
              attention to customer requirements.
            </p>
          </div>

          <div className="why-card">
            <span>✓</span>
            <h3>Customer Care</h3>
            <p>
              We aim to provide a smooth and
              convenient customer experience.
            </p>
          </div>

          <div className="why-card">
            <span>✓</span>
            <h3>Reliable Support</h3>
            <p>
              Service support for everyday home
              appliance maintenance needs.
            </p>
          </div>

        </div>

      </section>

      {/* Locations */}
      <section className="section location-section">

        <div className="section-heading">
          <span>OUR SERVICE AREAS</span>
          <h2>Serving Your Nearby Locations</h2>
        </div>

        <div className="location-list">

          {locations.map((location, index) => (
            <span key={index}>
              📍 {location}
            </span>
          ))}

        </div>

      </section>

      {/* Warranty */}
      <section className="warranty-section">

        <div className="warranty-content">

          <div className="warranty-icon">🛡️</div>

          <div>
            <span>WARRANTY SUPPORT</span>

            <h2>1 Year Warranty*</h2>

            <p>
              Material-based warranty support.
              Warranty terms depend on the material,
              product and applicable service conditions.
            </p>
          </div>

        </div>

      </section>

      {/* Contact CTA */}
      <section className="cta-section">

        <span>NEED HOME APPLIANCE SERVICE?</span>

        <h2>
          Let's Make Your Home
          <br />
          More Comfortable.
        </h2>

        <p>
          Contact Home Comfort Solution today
          for your service enquiry.
        </p>

        <Link to="/contact" className="btn primary-btn">
          Send Enquiry →
        </Link>

      </section>

    </div>
  );
}

export default Home;