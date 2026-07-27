import React from 'react';

const projects = [
  {
    title: 'Fursatak - Smart Advertising Platform',
    desc: 'A web application for browsing interest-based ads, managing profiles, and participating in listings. Features admin moderation, advertiser dashboards, and user management. Selected by the Ministry of Higher Education, Research and Innovation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    badge: 'Ministry Selected',
    github: 'https://github.com/Kawther-SWE'
  },
  {
    title: 'Car Spare Parts App (Android)',
    desc: 'An Android app for managing users and car spare parts with secure authentication, CRUD operations, real-time validation using Kotlin coroutines, RecyclerView adapters, and a PHP & MySQL backend.',
    tags: ['Kotlin', 'Android Studio', 'PHP', 'MySQL', 'Coroutines'],
    github: 'https://github.com/Kawther-SWE'
  },
  {
    title: 'AI-Powered Real-Time Transcription Overlay',
    desc: 'A cross-platform Flutter app transcribing live audio/video via a floating overlay. Integrated Google Cloud STT achieving 90% accuracy at 300ms latency, reducing resource overhead by 20%.',
    tags: ['Flutter', 'Dart', 'Google Cloud STT', 'AI'],
    badge: 'Top 5 Graduation Project',
    github: 'https://github.com/Kawther-SWE'
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I've Built</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Real-world applications spanning web platforms, mobile apps, and AI-powered tools.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={`${project.title}-${index}`}>
              <div className="project-card-header">
                <div className="project-folder-icon" aria-hidden="true">[]</div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="View on GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              {project.badge && <div className="project-badge">{project.badge}</div>}
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
