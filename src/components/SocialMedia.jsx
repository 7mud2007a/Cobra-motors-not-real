import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import './SocialMedia.css';

const socialChannels = [
  {
    name: 'Instagram',
    handle: '@cobramotors.official',
    desc: 'Behind-the-scenes deliveries, new arrivals & private track days',
    icon: <InstagramIcon size={28} />,
    url: 'https://instagram.com/cobramotors',
    badge: 'Official Feed'
  },
  {
    name: 'Facebook',
    handle: 'COBRA MOTORS Luxury Fleet',
    desc: 'Exclusive private sales exhibitions & client community updates',
    icon: <FacebookIcon size={28} />,
    url: 'https://facebook.com/cobramotors',
    badge: 'Community'
  },
  {
    name: 'TikTok',
    handle: '@cobramotors',
    desc: 'Cold starts, exhaust acoustic showcases & supercar walkthroughs',
    icon: <TikTokIcon size={26} />,
    url: 'https://tiktok.com/@cobramotors',
    badge: 'Trending Clips'
  },
  {
    name: 'WhatsApp',
    handle: '+966 50 000 0000',
    desc: 'Direct priority communications with our senior luxury advisors',
    icon: <WhatsAppIcon size={28} />,
    url: 'https://wa.me/966500000000?text=Hello%20COBRA%20MOTORS,%20I%20would%20like%20to%20inquire%20about%20your%20inventory',
    badge: 'Instant Concierge'
  }
];

const SocialMedia = () => {
  return (
    <section id="social" className="social-section section-padding">
      <div className="container">
        <header className="social-header">
          <span className="section-tag">DIGITAL PRESENCE</span>
          <h2 className="section-title">Connect with COBRA MOTORS</h2>
          <p className="section-desc">
            Immerse yourself into the world of elite automotive culture. Follow our verified platforms for private releases and bespoke unveils.
          </p>
        </header>

        <div className="social-grid">
          {socialChannels.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={`Visit COBRA MOTORS on ${item.name}`}
            >
              <div className="social-card-top">
                <div className="social-icon-box">{item.icon}</div>
                <span className="social-badge">{item.badge}</span>
              </div>

              <div className="social-card-content">
                <h3 className="social-channel-name">{item.name}</h3>
                <span className="social-handle">{item.handle}</span>
                <p className="social-card-desc">{item.desc}</p>
              </div>

              <div className="social-card-action">
                <span>Open Channel</span>
                <span className="action-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
