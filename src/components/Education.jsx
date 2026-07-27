import React from 'react';

const courses = [
  'Object Oriented Programming', 'Databases', 'Data Structures & Algorithms',
  'Operating Systems', 'Computer Networks', 'Data & Network Security',
  'Web Scripting', 'AI Techniques', 'Mobile App Development', 'Game Development',
  'Software Design', 'Software Testing & QA', 'Zend PHP'
];

const awards = [
  { icon: '#1', text: '1st place - AI & Society Hackathon at Muscat College' },
  { icon: '#2', text: '2nd place - IT Club Competition, Muscat College' },
  { icon: 'Top 10', text: '10th place - Technology Olympics 2025 (AI path), qualified for finals in Tehran' },
  { icon: 'MOHERI', text: 'Fursatak project selected by Ministry of Higher Education, Scientific Research and Innovation' },
  { icon: 'Top 5', text: 'AI Transcription poster selected as one of top 5 graduation projects' },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-label">Education & Awards</p>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Pursuing a Bachelor's degree with distinction in Computer Systems & Software Engineering.
        </p>
        <div className="edu-card">
          <div className="edu-main">
            <h3>BSc Computer Systems &amp; Software Engineering</h3>
            <div className="edu-school">Muscat College</div>
            <div className="edu-date">2021-2026 &middot; With Honours</div>
            <div className="edu-gpa">3.96 / 4.0</div>
            <div className="edu-gpa-label">Cumulative GPA</div>
          </div>
          <div className="edu-courses">
            <h4>Relevant Coursework</h4>
            <div className="edu-courses-grid">
              {courses.map((course) => <span key={course}>{course}</span>)}
            </div>
          </div>
        </div>
        <div className="awards-section">
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Awards &amp; Recognition</h3>
          <div className="awards-grid">
            {awards.map((award) => (
              <div className="award-item" key={award.text}>
                <span className="award-icon">{award.icon}</span>
                <p>{award.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
