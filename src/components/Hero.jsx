import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Requirement:
  // - The company logo must be completely hidden when the visitor first enters.
  // - After a very short delay, the logo should suddenly appear with a beautiful, cinematic, premium reveal animation.
  // - Make the logo the main visual element of the hero section.
  // - Add ONLY the following Arabic slogan underneath the logo: "وجهتك الأولى في عالم السيارات"
  // - Do NOT write COBRA MOTORS anywhere in the hero section.
  // - Do NOT add any other company name.
  // - Do NOT add additional marketing headlines or descriptions.
  // - Keep the hero elegant, minimal, and visually impressive.
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Cinematic delay before sudden, smooth reveal
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Subtle luxury ambient lighting */}
      <div className="hero-ambient-glow" />

      <div className="hero-content">
        <div className={`hero-reveal-wrapper ${revealed ? 'revealed' : 'hidden'}`}>
          <div className="hero-logo-frame">
            <img
              src="/assets/cobra-logo.png"
              alt="Brand Identity"
              className="hero-logo"
            />
          </div>

          <h1 className="hero-arabic-slogan" lang="ar" dir="rtl">
            وجهتك الأولى في عالم السيارات
          </h1>
        </div>
      </div>

      <a href="#collection" className={`hero-scroll-cue ${revealed ? 'visible' : ''}`} aria-label="Scroll to vehicle collection">
        <span className="scroll-cue-text">EXPLORE FLEET</span>
        <ChevronDown size={20} className="scroll-arrow" />
      </a>
    </section>
  );
};

export default Hero;
