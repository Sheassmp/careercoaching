import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
          <ScrollLink
            id="contact"
            className="menu-item"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </ScrollLink>
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
              <ScrollLink
                className="nav-link"
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </ScrollLink>
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
