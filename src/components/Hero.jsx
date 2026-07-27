import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="fade-up">
            <div className="hero-tag">
              <span className="hero-dot"></span>
              Available for opportunities
            </div>
            <h1>
              Hi, I'm{' '}
              <span className="highlight">Kawther<br />Albusaidi</span>
            </h1>
            <p>
              Full-Stack Developer & Software Engineering student building
              scalable web and mobile applications with modern technologies
              and AI integrations.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects &rarr;
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-image fade-up fade-up-delay-2">
            <div className="hero-avatar-frame">
              <div className="hero-avatar-inner">
                <img src="/profile-photo.jpg" alt="Kawther Albusaidi" className="hero-avatar-photo" />
              </div>
              <div className="hero-float-icon" style={{ top: '20px', right: '-40px' }}>
                GPA 3.92
              </div>
              <div className="hero-float-icon" style={{ bottom: '40px', left: '-50px', animationDelay: '1s' }}>
                10+ Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
