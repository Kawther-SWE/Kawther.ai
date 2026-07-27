import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Full-Stack Developer &amp; AI Enthusiast</h2>
            <p>
              I'm a Software Engineering student at Muscat College with a passion
              for building end-to-end systems &mdash; from frontend interfaces to backend
              logic and database management. I'm driven by integrating AI solutions
              into real-world applications that deliver real impact.
            </p>
            <p>
              My project Fursatak (Smart Advertising Platform) was selected by the
              Ministry of Higher Education, and I placed 1st in the AI &amp; Society
              Hackathon. I code in C++, Java, Python, PHP, Dart/Flutter, and
              JavaScript, and I'm always exploring the next technology frontier.
            </p>
            <a href="https://github.com/Kawther-SWE" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: '12px' }}>
              Visit my GitHub &rarr;
            </a>
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-value">3.92</div>
              <div className="about-stat-label">GPA / 4.0</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">10+</div>
              <div className="about-stat-label">Projects Built</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">4</div>
              <div className="about-stat-label">Years Coding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
