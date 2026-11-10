import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-brand" aria-label="COBRA MOTORS Home">
          <img src="/assets/cobra-logo.png" alt="COBRA MOTORS" className="navbar-logo-img" />
        </a>

        <nav className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#collection" onClick={() => setMobileMenuOpen(false)}>Collection</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#social" onClick={() => setMobileMenuOpen(false)}>Connect</a>
          <button
            type="button"
            className="navbar-cta-mobile btn btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
          >
            <PhoneCall size={16} />
            <span>Private Concierge</span>
          </button>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="btn btn-primary navbar-cta-desktop"
            onClick={onOpenContact}
          >
            <PhoneCall size={16} />
            <span>Private Concierge</span>
          </button>

          <button
            type="button"
            className="navbar-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
