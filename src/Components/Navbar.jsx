import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="header" smooth={true} duration={1000}>
        <img className="imgLogo" src={logo} alt="logo" href="Header" />
      </Link>
      <div>
        <ul className="navegacion">
          <Link to="header" smooth={true} duration={1000}>
            <li>Header</li>
          </Link>
          <Link to="features" smooth={true} duration={1000}>
            <li>Features</li>
          </Link>
          <Link to="offer" smooth={true} duration={1000}>
            <li>Offer</li>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <li>About</li>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
