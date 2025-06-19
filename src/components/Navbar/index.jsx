import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import Wrapper from './style';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <nav className='Navbar'>
        <div className="Left">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`Right ${isOpen ? 'active' : ''}`}>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about-us')}>About Us</li>
          <li onClick={() => navigate('/gallery')}>Gallery</li>
          <li onClick={() => navigate('/our-services')}>Our Services</li>
          <li onClick={() => navigate('/blogs')}>Blogs</li>
          <li onClick={() => navigate('/contact')}>Contact Us</li>
        </ul>
      </nav>
    </Wrapper>
  );
}
