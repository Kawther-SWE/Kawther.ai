import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/Kawther-SWE" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/kawtheralbusaidi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kawtheralbusaidi324@gmail.com">Email</a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Kawther Albusaidi.
        </p>
      </div>
    </footer>
  );
}
