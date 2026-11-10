import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import './SocialMedia.css';

const socialChannels = [
  {
    name: 'Instagram',
    handle: '@cobramotors.official',
    desc: 'تابعوا تسليمات السيارات، وأحدث الإضافات، وتجارب الحلبات الخاصة',
    icon: <InstagramIcon size={28} />,
    url: 'https://instagram.com/cobramotors',
    badge: 'الحساب الرسمي'
  },
  {
    name: 'Facebook',
    handle: 'COBRA MOTORS Luxury Fleet',
    desc: 'عروض بيع خاصة وآخر أخبار مجتمع عملائنا',
    icon: <FacebookIcon size={28} />,
    url: 'https://facebook.com/cobramotors',
    badge: 'مجتمعنا'
  },
  {
    name: 'TikTok',
    handle: '@cobramotors',
    desc: 'تشغيل المحركات، وأصوات العوادم، وجولات داخل السيارات الخارقة',
    icon: <TikTokIcon size={26} />,
    url: 'https://tiktok.com/@cobramotors',
    badge: 'مقاطع مميزة'
  },
  {
    name: 'WhatsApp',
    handle: '+966 50 000 0000',
    desc: 'تواصل مباشر مع مستشاري المبيعات وخدمة العملاء',
    icon: <WhatsAppIcon size={28} />,
    url: 'https://wa.me/966500000000?text=Hello%20COBRA%20MOTORS,%20I%20would%20like%20to%20inquire%20about%20your%20inventory',
    badge: 'تواصل فوري'
  }
];

const SocialMedia = () => {
  return (
    <section id="social" className="social-section section-padding">
      <div className="container">
        <header className="social-header">
          <span className="section-tag">تواجدنا الرقمي</span>
          <h2 className="section-title">تواصل مع كوبرا موتورز</h2>
          <p className="section-desc">
            اكتشفوا عالم السيارات الفاخرة وتابعونا عبر منصاتنا للاطلاع على أحدث السيارات والعروض الحصرية.
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
              aria-label={`زيارة كوبرا موتورز على ${item.name}`}
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
                <span>زيارة الحساب</span>
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
