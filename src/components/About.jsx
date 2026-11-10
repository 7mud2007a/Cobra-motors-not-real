import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Sparkles, Users } from 'lucide-react';
import './About.css';

const About = ({ stats }) => {
  const [counts, setCounts] = useState({
    years: 0,
    sold: 0,
    customers: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.floor(easeOut * stats.yearsExperience),
              sold: Math.floor(easeOut * stats.carsSold),
              customers: Math.floor(easeOut * stats.happyCustomers)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                years: stats.yearsExperience,
                sold: stats.carsSold,
                customers: stats.happyCustomers
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section id="about" ref={sectionRef} className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-column">
            <span className="section-tag">HERITAGE OF DISTINCTION</span>
            <h2 className="section-title">About Us</h2>

            <p className="about-lead">
              At COBRA MOTORS, our legacy is forged on an unwavering commitment to unparalleled automotive excellence, verified provenance, and absolute client satisfaction.
            </p>

            <p className="about-body">
              Every machine within our showroom undergoes a meticulous multi-point technical assessment by certified master technicians. We cater to discerning collectors and connoisseurs who demand beyond ordinary luxury — delivering seamless private acquisitions, bespoke vehicle customization, and white-glove international logistics.
            </p>

            <div className="about-values">
              <div className="value-pill">
                <ShieldCheck size={20} className="val-icon" />
                <div>
                  <strong>Certified Provenance</strong>
                  <p>Guaranteed authentic history & mileage verification.</p>
                </div>
              </div>

              <div className="value-pill">
                <Sparkles size={20} className="val-icon" />
                <div>
                  <strong>Bespoke Sourcing</strong>
                  <p>Worldwide access to rare and limited allocation hypercars.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats-column">
            <div className="stats-card-main">
              <span className="stats-accent-line" />
              <div className="stat-row">
                <div className="stat-number-wrap">
                  <span className="stat-number">{counts.years}</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">
                  <strong>Years of Experience</strong>
                  <span>Delivering high-caliber luxury across the globe</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-row">
                <div className="stat-number-wrap">
                  <span className="stat-number">{counts.sold}</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">
                  <strong>Cars Sold</strong>
                  <span>Handcrafted supercars and luxury flagships delivered</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-row">
                <div className="stat-number-wrap">
                  <span className="stat-number">{counts.customers}</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">
                  <strong>Happy Customers</strong>
                  <span>Discerning VIP clients and private collectors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
