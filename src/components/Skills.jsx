import React from 'react';

const skillCategories = [
  {
    name: 'Languages',
    items: ['C/C++', 'C#', 'Java', 'Python', 'HTML/CSS', 'JavaScript', 'SQL', 'PHP', 'Dart & Flutter']
  },
  {
    name: 'Tools & Technologies',
    items: ['MySQL', 'Oracle', 'Git/GitHub', 'VS Code', 'Android Studio', 'Figma', 'Google Cloud AI', 'Unity', 'XAMPP', 'Anaconda']
  },
  {
    name: 'Frameworks & Platforms',
    items: ['Flutter', 'React', 'Node.js', 'REST APIs', 'Generative AI', 'Machine Learning', 'State Management']
  }
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills & Technologies</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          A versatile tech stack spanning languages, frameworks, AI tools,
          and development platforms.
        </p>
        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div className="skills-category" key={cat.name}>
              <h3>{cat.name}</h3>
              <div className="skills-tags">
                {cat.items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
