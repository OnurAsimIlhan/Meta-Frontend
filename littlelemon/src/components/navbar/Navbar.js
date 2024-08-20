import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/Logo .svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isOpen ? 'active' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
      </ul>
    </div>
  );
}

export default Navbar;