import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "/logo.png";
import { IoMdArrowForward } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Why Us</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="nav-contact">
      <button>Click this number <IoMdArrowForward className="arrow"/></button>
      <p>
      <IoLogoWhatsapp />
      <a href="https://wa.me/256771654190" target="_blank" rel="noopener noreferrer">
        +256 771654190
      </a>
     </p>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
