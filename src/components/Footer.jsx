import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import './Footer.css';

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-box">
            <img
              src="/assets/cobra-logo.png"
              alt="COBRA MOTORS"
              className="footer-logo"
            />
            <p className="footer-arabic-motto" lang="ar" dir="rtl">
              وجهتك الأولى في عالم السيارات
            </p>
            <p className="footer-bio">
              Curating rare supercars, bespoke grand tourers, and automotive investment assets with international white-glove delivery.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <nav className="footer-nav-links">
                <a href="#hero">Overview</a>
                <a href="#collection">Masterpiece Collection</a>
                <a href="#about">About Us</a>
                <a href="#social">Digital Experience</a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <h4>Direct Inquiries</h4>
              <nav className="footer-nav-links">
                <button type="button" className="footer-text-btn" onClick={onOpenContact}>
                  Private Concierge
                </button>
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                  VIP WhatsApp
                </a>
                <a href="tel:+966500000000">
                  +966 50 000 0000
                </a>
                <a href="mailto:concierge@cobramotors.com">
                  concierge@cobramotors.com
                </a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <h4>Social Presence</h4>
              <div className="footer-social-icons">
                <a href="https://instagram.com/cobramotors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href="https://facebook.com/cobramotors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href="https://tiktok.com/@cobramotors" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon size={16} />
                </a>
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 COBRA MOTORS. All Rights Reserved.
          </p>
          <span className="demo-disclaimer">
            All displayed vehicle details and specifications are demo presentation content.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
