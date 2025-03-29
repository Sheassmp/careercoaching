import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <header className="navigation-header">
      {/* Mobile Hamburger Menu – only visible below md */}
      <div className="block md:hidden">
        <Menu right>
          <Link id="about" className="menu-item" to="/">
            About Us
          </Link>
          <Link id="services" className="menu-item" to="/services">
            Services
          </Link>
          <Link id="contact" className="menu-item" to="/contact">
            Contact Us
          </Link>
          <Link id="newsletter" className="menu-item" to="/newsletter">
            Newsletter
          </Link>
        </Menu>
      </div>

      {/* Desktop Navigation Menu – visible only on md and larger */}
      <div className="hidden md:block">
        <nav className="flex justify-center p-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/newsletter" className="nav-link">
                Newsletter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
