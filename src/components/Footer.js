
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>HCS</h2>
          <h3>HOME COMFORT SOLUTION</h3>

          <p>
            Reliable home appliance repair and maintenance
            services for your comfort.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <a href="tel:9940070057">
            📞 9940070057
          </a>

          <p>
            Bala Ambookan Nagar RD,
            S.Kolathur, Madipakkam,
            Chennai, Tamil Nadu - 600091.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Home Comfort Solution.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;