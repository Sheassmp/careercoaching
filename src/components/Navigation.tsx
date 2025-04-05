import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { motion } from 'framer-motion';
import './Navigation.css';

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

  // Set text color based on scroll state
  const textColor = scrolled ? "#ffffff" : "#412412"; // white when scrolled, dark otherwise

  // Variants for header background animation
  const headerVariants = {
    initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
    scrolled: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
  };

  // Mailto link for Contact Us
  const mailtoLink = "mailto:careerwithj@gmail.com?subject=Inquiry%20from%20Website";

  return (
    <motion.header
      className="navigation-header md:sticky md:top-0 md:z-50"
      variants={headerVariants}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full flex items-center justify-between px-6 py-4">
        {/* Branding on the left */}
        <div 
          className="text-2xl font-bold"
          style={{ color: textColor, transition: 'color 0.4s ease' }}
        >
          Careers With J
        </div>

      {/* Mobile Hamburger Menu – visible only below md */}
      <div className="block md:hidden">
        <Menu right>
            {/* About Us scrolls to "whybridgepoint" */}
          <ScrollLink
            className={`menu-item white-text`}
            to="about"
            smooth={true}
            offset={0}
            duration={500}
          >
              <p>About Us</p>
          </ScrollLink>
            {/* Contact Us opens mailto */}
            <a
              href={mailtoLink}
              className="menu-item"
              style={{ color: "white", transition: 'color 0.4s ease' }}
          >
            Contact Us
            </a>
        </Menu>
      </div>

      {/* Desktop Navigation Menu – visible only on md and larger */}
      <div className="hidden md:block">
          <nav className="flex space-x-6">
              <ScrollLink
              className="nav-link"
               to="about"
                smooth={true}
                offset={0}
                duration={500}
              style={{ color: textColor, transition: 'color 0.4s ease' }}
              >
                About Us
              </ScrollLink>
            <a
              href={mailtoLink}
              className="nav-link"
              style={{ color: textColor, transition: 'color 0.4s ease' }}
              >
                Contact Us
            </a>
        </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
