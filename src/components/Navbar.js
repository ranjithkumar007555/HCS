import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    setMenuOpen(false);

    // Home page top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo + Company Name */}
        <Link
          to="/"
          className="brand"
          onClick={goHome}
        >

          <div className="brand-logo">
            <img
              src={logo}
              alt="Home Comfort Solution"
            />
          </div>

          <div className="brand-text">
            <h2>Home Comfort Solution</h2>
            <span>Home Appliance Service</span>
          </div>

        </Link>


        {/* 3 Line Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* Menu */}
        {menuOpen && (
          <div className="mobile-menu">

            <Link
              to="/"
              onClick={goHome}
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => {
                setMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}
            >
              Contact
            </Link>

          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;