import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const EMAILJS_SERVICE_ID = 'service_i1ve81c';
const EMAILJS_TEMPLATE_ID = 'template_qxsk2rp';
const EMAILJS_PUBLIC_KEY = 'ZKfH_OrjQ3dLM8A0c';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        EMAILJS_PUBLIC_KEY
      );

      event.currentTarget.reset();
      setStatus('Thanks for reaching out! Your message was sent successfully.');
    } catch (error) {
      setStatus('Sorry, the message could not be sent. Please email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          I'm always open to new opportunities, collaborations, and interesting projects.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Whether you have a project idea, a job opportunity, or just want
              to say hello &mdash; I'd love to hear from you.
            </p>
            <div className="contact-links">
              <a href="mailto:kawtheralbusaidi324@gmail.com" className="contact-link">
                <div className="contact-link-icon">Email</div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">kawtheralbusaidi324@gmail.com</div>
                </div>
              </a>
              <a href="tel:+96894291115" className="contact-link">
                <div className="contact-link-icon">Call</div>
                <div>
                  <div className="contact-link-label">Phone</div>
                  <div className="contact-link-value">+968 9429 1115</div>
                </div>
              </a>
              <a href="https://github.com/Kawther-SWE" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/Kawther-SWE</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/kawtheralbusaidi" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">in</div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/kawtheralbusaidi</div>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="name@gmail.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message \u2192'}
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
