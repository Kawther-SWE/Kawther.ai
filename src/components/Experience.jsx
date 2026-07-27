import React from 'react';

const experiences = [
  {
    title: 'Participant',
    company: '100 Arab Innovators Program',
    location: 'On-site',
    date: '4-14 Aug 2024',
    bullets: [
      '11-day intensive program with hands-on AI fundamentals, API integrations, generative AI tools, and Python automation.',
      'Developed custom Python solutions to automate workflows and optimize AI model training processes.',
      'Collaborated with experts on AI project development, improving model accuracy and efficiency.'
    ],
    tech: ['Python', 'AI APIs', 'Generative AI', 'ML Frameworks', 'Automation']
  },
  {
    title: 'Trainee',
    company: 'Almobeen Academy',
    location: 'Online',
    date: 'May-Dec 2024',
    bullets: [
      'Developed Android & iOS apps with Dart & Flutter, solving complex UI/UX challenges.',
      'Improved app performance and user engagement through optimized UI components.',
      'Used Flutter state management and custom widgets for scalable, maintainable cross-platform code.'
    ],
    tech: ['Dart', 'Flutter', 'UI/UX Design', 'Performance Optimization', 'State Management']
  },
  {
    title: 'Research Assistant (Contract)',
    company: 'Muscat College',
    location: 'On-site',
    date: 'Oct-Dec 2024',
    bullets: [
      'Contributed to research on psychometric career assessment testing in Oman.',
      'Developed research skills, technical writing, analytical thinking, and problem-solving abilities.'
    ],
    tech: ['Research', 'Technical Writing', 'Data Analysis']
  }
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Hands-on experience across AI programs, mobile development, and academic research.
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={`${exp.company}-${index}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div>
                  <div className="timeline-title">{exp.title}</div>
                  <div className="timeline-company">{exp.company} &middot; {exp.location}</div>
                </div>
                <div className="timeline-date">{exp.date}</div>
              </div>
              <div className="timeline-desc">
                <ul>{exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
              <div className="timeline-tech">
                {exp.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
