import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-logo">
          <img className="brand-logo" 
          src={logo} alt="" />
        </span>

        <span className="brand-text">
          HOME COMFORT
          <small>SOLUTION</small>
        </span>
      </Link>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;