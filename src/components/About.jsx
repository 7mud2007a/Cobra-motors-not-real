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
            <span className="section-tag">إرث من التميّز</span>
            <h2 className="section-title">من نحن</h2>

            <p className="about-lead">
              في كوبرا موتورز، نبني إرثنا على الشغف بالتميّز في عالم السيارات، والشفافية في تاريخ كل سيارة، والالتزام الكامل برضا عملائنا.
            </p>

            <p className="about-body">
              تخضع كل سيارة في معرضنا لفحص فني دقيق على أيدي مختصين. ونقدم لعشاق السيارات الفاخرة تجربة متكاملة تشمل الشراء الخاص، والتخصيص حسب الطلب، وخدمات التوصيل الدولي بعناية فائقة.
            </p>

            <div className="about-values">
              <div className="value-pill">
                <ShieldCheck size={20} className="val-icon" />
                <div>
                  <strong>تاريخ موثّق</strong>
                  <p>سجل موثوق للسيارة والتحقق من المسافة المقطوعة.</p>
                </div>
              </div>

              <div className="value-pill">
                <Sparkles size={20} className="val-icon" />
                <div>
                  <strong>اختيار حسب الطلب</strong>
                  <p>إمكانية الوصول إلى السيارات النادرة والإصدارات المحدودة حول العالم.</p>
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
                  <strong>سنوات من الخبرة</strong>
                  <span>نقدم تجارب فاخرة بمعايير عالمية</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-row">
                <div className="stat-number-wrap">
                  <span className="stat-number">{counts.sold}</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">
                  <strong>سيارة تم بيعها</strong>
                  <span>سيارات رياضية وفاخرة وصلت إلى أصحابها</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-row">
                <div className="stat-number-wrap">
                  <span className="stat-number">{counts.customers}</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">
                  <strong>عميل سعيد</strong>
                  <span>عملاء مميزون وهواة جمع السيارات</span>
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
