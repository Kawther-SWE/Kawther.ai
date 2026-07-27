import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          Kawther<span>.</span>
        </a>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '\u00d7' : '\u2630'}
        </button>
        <div className={`navbar-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '13px', color: '#FFFFFF' }}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
