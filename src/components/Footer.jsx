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
              نختار لكم أندر السيارات الرياضية والفاخرة، ونوفر خدمات شراء وتوصيل دولية بمعايير استثنائية.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-col">
              <h4>روابط الموقع</h4>
              <nav className="footer-nav-links">
                <a href="#hero">الرئيسية</a>
                <a href="#collection">معرض السيارات</a>
                <a href="#about">من نحن</a>
                <a href="#social">تواصل معنا</a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <h4>التواصل المباشر</h4>
              <nav className="footer-nav-links">
                <button type="button" className="footer-text-btn" onClick={onOpenContact}>
                  خدمة العملاء الخاصة
                </button>
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                  واتساب العملاء
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
              <h4>تابعونا</h4>
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
            © 2026 كوبرا موتورز. جميع الحقوق محفوظة.
          </p>
          <span className="demo-disclaimer">
            جميع بيانات ومواصفات السيارات المعروضة لأغراض العرض التعريفي.
          </span>
          <p className="developer-credit">
            تم التطوير بواسطة{' '}
            <a href="https://sevenmud-web-y0dt.onrender.com/#hero" target="_blank" rel="noopener noreferrer">
              حمود
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
