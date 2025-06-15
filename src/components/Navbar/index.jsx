import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import Wrapper from './style';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <nav className='Navbar'>
        <div className='Left'>
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`Right ${isOpen ? 'active' : ''}`}>
          <li>Home</li>
          <li>About Us</li>
          <li>Gallery</li>
          <li>Our Services</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </Wrapper>
  );
}