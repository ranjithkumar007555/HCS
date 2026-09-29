import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {

  const goHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const goToPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-about">

          <h2>Home Comfort Solution</h2>

          <p>
            Professional home appliance service for AC, fridge,
            washing machine and RO.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link
            to="/"
            onClick={goHome}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={goToPage}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={goToPage}
          >
            Contact
          </Link>

        </div>


        {/* Social Media */}
        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-links">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook /> Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram /> Instagram
            </a>

          </div>

        </div>

      </div>


      {/* Copyright */}
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