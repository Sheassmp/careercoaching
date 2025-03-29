import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';
import { color } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initialize state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When scrolled, text will be white; otherwise gray.
  const textColor = scrolled
    ? "white opacity-100"
    : "text-gray-600 opacity-100";

  // Background changes on scroll.
  const bgClass = scrolled
    ? "md:bg-black md:bg-opacity-95 md:backdrop-blur-sm"
    : "bg-transparent";

  return (
    <header className={`navigation-header md:sticky md:top-0 md:z-50 ${bgClass}`}>
      {/* Mobile Hamburger Menu – visible only below md */}
      <div className="block md:hidden">
        <Menu right>
          <ScrollLink
            id="about"
            className={`menu-item ${textColor}`}
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p style={{ color: textColor }}>
            About Us
            </p>
          </ScrollLink>
          <ScrollLink
            id="contact"
            className={`menu-item ${textColor}`}
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </ScrollLink>
          <Link id="newsletter" className={`menu-item ${textColor}`} to="/newsletter">
            Newsletter
          </Link>
        </Menu>
      </div>

      {/* Desktop Navigation Menu – visible only on md and larger */}
      <div className="hidden md:block">
        <nav className="flex justify-center p-4">
          <ul className="flex space-x-6">
            <li>
              <ScrollLink
                className={`nav-link ${textColor}`}
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`nav-link ${textColor}`}
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <Link to="/newsletter" className={`nav-link ${textColor}`}>
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
