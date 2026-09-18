import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowUpRight, 
  Code, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Settings,
  MessageSquare,
  CheckCircle2,
  Menu,
  X,
  FileText,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import ClientEffects from './components/ClientEffects';
import { Github, Linkedin, Instagram, Leetcode } from './components/BrandIcons';
import { portfolioData } from './data/portfolio';
import TypewriterCode from './components/TypewriterCode';

// Deterministic starfield coordinates to prevent hydration issues
const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: `${(i * 7 + 13) % 100}%`,
  left: `${(i * 13 + 7) % 100}%`,
  delay: `${(i * 0.12).toFixed(2)}s`
}));

// Helper to get category icons for Skills
const getCategoryIcon = (categoryName) => {
  switch (categoryName) {
    case 'Languages':
    case 'Programming':
      return <Terminal size={16} />;
    case 'Frontend Development':
    case 'Web Development':
      return <Code size={16} />;
    case 'Backend & Systems':
    case 'Backend':
      return <Layers size={16} />;
    case 'Database & Storage':
    case 'Database':
      return <Database size={16} />;
    case 'AI & Modern Tech':
    case 'AI / ML':
      return <Cpu size={16} />;
    case 'Core Computer Science':
      return <BookOpen size={16} />;
    case 'Developer Tools':
    case 'Tools & Creative':
      return <Settings size={16} />;
    default:
      return <Sparkles size={16} />;
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, hero, stats, about, skills, projects, experience, education, contact } = portfolioData;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <ClientEffects />
      
      {/* Background Decorators */}
      <div className="stars-container">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="star" 
            style={{ 
              top: star.top, 
              left: star.left, 
              animationDelay: star.delay 
            }} 
          />
        ))}
      </div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="nav-logo">
            <span className="nav-logo-text">{personal.name}</span>
          </a>

          <ul className="nav-links">
            <li className="nav-link-item"><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li className="nav-link-item"><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
            <li className="nav-link-item"><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li className="nav-link-item"><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
            <li className="nav-link-item"><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li className="nav-link-item"><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>

          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="nav-cta">
            Let's Talk
          </a>

          <button onClick={toggleMobileMenu} className="nav-toggle" aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-overlay open" onClick={closeMobileMenu}></div>
      )}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button onClick={toggleMobileMenu} className="nav-mobile-close" aria-label="Close Menu">
          <X size={22} />
        </button>
        <ul className="nav-mobile-links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
        </ul>
        <a 
          href="#contact" 
          onClick={(e) => handleLinkClick(e, 'contact')} 
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
        >
          Let's Talk <ArrowUpRight size={14} />
        </a>
      </div>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content reveal">
                <div className="hero-availability">
                  <span className="hero-dot"></span>
                  <span>{personal.availability}</span>
                </div>
                <h1 className="hero-title">
                  <span className="name">{personal.name}</span><br />
                  <span className="accent-text">{personal.identity}</span>
                </h1>
                <p className="hero-headline">{hero.headline}</p>
                <div className="hero-ctas">
                  <a href="#projects" className="btn btn-primary">
                    View My Work <ArrowUpRight size={14} />
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    View Resume <FileText size={14} />
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    Contact Me
                  </a>
                </div>
                <div className="hero-socials">
                  <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href={contact.links.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
                    <Leetcode size={16} />
                  </a>
                  <a href={`mailto:${contact.links.email}`} className="social-icon" aria-label="Email">
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              <div className="hero-visual reveal reveal-delay-2">
                <div className="tech-showcase-wrapper">
                  {/* Background ambient glow */}
                  <div className="showcase-ambient-glow" aria-hidden="true"></div>

                  {/* Floating Highlight Chips */}
                  <div className="floating-chip chip-top-right">
                    <Sparkles size={13} className="chip-icon-ai" />
                    <span>Gemini AI & Full Stack</span>
                  </div>
                  
                  <div className="floating-chip chip-bottom-left">
                    <Award size={13} className="chip-icon-gold" />
                    <span>9.02 CGPA · MAIT IT</span>
                  </div>

                  {/* Terminal Card Mockup */}
                  <div className="showcase-card">
                    {/* Header Bar */}
                    <div className="showcase-header">
                      <div className="device-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="showcase-title-tab">
                        <Terminal size={12} className="tab-icon" />
                        <span>hussain.config.ts</span>
                      </div>
                      <div className="showcase-status-badge">
                        <span className="pulse-indicator"></span>
                        <span>OPEN FOR ROLES</span>
                      </div>
                    </div>

                    <div className="showcase-content">
                      {/* Code Snippet with Dynamic Typewriter Animation */}
                      <TypewriterCode />

                      {/* Tech Capabilities Deck */}
                      <div className="showcase-tech-deck">
                        <div className="deck-header">
                          <Cpu size={12} />
                          <span>CORE CAPABILITIES</span>
                        </div>
                        <div className="showcase-badges-grid">
                          <div className="tech-badge-item">
                            <span className="badge-bullet"></span>
                            <span>React 19</span>
                          </div>
                          <div className="tech-badge-item">
                            <span className="badge-bullet"></span>
                            <span>Node.js / Express</span>
                          </div>
                          <div className="tech-badge-item highlight-ai">
                            <Sparkles size={11} />
                            <span>Gemini AI Agents</span>
                          </div>
                          <div className="tech-badge-item">
                            <span className="badge-bullet"></span>
                            <span>MongoDB & Postgres</span>
                          </div>
                          <div className="tech-badge-item">
                            <span className="badge-bullet"></span>
                            <span>Socket.IO & WebRTC</span>
                          </div>
                          <div className="tech-badge-item">
                            <span className="badge-bullet"></span>
                            <span>Redis & Caching</span>
                          </div>
                        </div>
                      </div>

                      {/* Terminal Run / Live Projects Footer */}
                      <div className="showcase-footer-status">
                        <div className="terminal-prompt">
                          <span className="prompt-sym">$</span>
                          <div className="prompt-links">
                            <a 
                              href="https://gorido.vercel.app/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="terminal-app-link"
                              title="Open GoRido (gorido.vercel.app)"
                            >
                              gorido
                            </a>
                            <span className="prompt-sep">,</span>
                            <a 
                              href="https://synapseai-lbod.onrender.com/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="terminal-app-link"
                              title="Open SynapseAI (synapseai-lbod.onrender.com)"
                            >
                              synapse-ai
                            </a>
                            <span className="prompt-sep">,</span>
                            <a 
                              href="https://linkmind-ai.onrender.com/dashboard" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="terminal-app-link"
                              title="Open LinkMind AI (linkmind-ai.onrender.com/dashboard)"
                            >
                              linkmind
                            </a>
                            <span className="prompt-sep">,</span>
                            <a 
                              href="https://meetmind-sigma.vercel.app/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="terminal-app-link"
                              title="Open MeetMind AI (meetmind-sigma.vercel.app)"
                            >
                              meetmind
                            </a>
                          </div>
                        </div>
                        <span className="prompt-tag">4 SAAS LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item reveal">
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <span className="section-tag">— 01 / PROFILE</span>
            <h2 className="section-title">The story so far.</h2>
            <div className="about-grid">
              <div className="reveal">
                <p className="about-intro-txt">{about.text}</p>
                <div className="skills-list" style={{ marginTop: '1.5rem' }}>
                  {about.interests.map((interest, idx) => (
                    <span key={idx} className="skill-tag">{interest}</span>
                  ))}
                </div>

                {/* Staggered Social Pill Cluster for About Section */}
                <div className="social-pill-cluster" style={{ alignItems: 'flex-start', marginTop: '2.5rem' }}>
                  <div className="social-pill-row" style={{ justifyContent: 'flex-start' }}>
                    <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-btn wide">
                      <Linkedin size={18} />
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight size={14} className="arrow" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-pill-btn wide" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                      <FileText size={18} />
                      <span>View Resume</span>
                      <ArrowUpRight size={14} className="arrow" />
                    </a>
                  </div>
                  <div className="social-pill-row" style={{ justifyContent: 'flex-start' }}>
                    <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <a href={contact.links.leetcode} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                      <Leetcode size={16} />
                      <span>LeetCode</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="about-education">
                  <div className="edu-year">{personal.education.duration}</div>
                  <h3 className="edu-degree">{personal.education.degree}</h3>
                  <p className="edu-college">{personal.education.college} · {personal.education.university}</p>
                  <div style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span>Expected: {personal.education.graduationYear}</span>
                    {personal.education.grade && (
                      <>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <span style={{ color: 'var(--text-color)', fontWeight: 600 }}>{personal.education.grade}</span>
                      </>
                    )}
                  </div>
                </div>

                {personal.schooling && (
                  <div className="about-education">
                    <div className="edu-year">{personal.schooling.graduationYear}</div>
                    <h3 className="edu-degree">{personal.schooling.name}</h3>
                    <p className="edu-college">{personal.schooling.location}</p>
                    <div style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--text-color)', fontWeight: 600 }}>{personal.schooling.details}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <span className="section-tag">— 02 / TOOLKIT</span>
            <h2 className="section-title">Skills &amp; strengths.</h2>
            <div className="skills-grid">
              {skills.categories.map((cat, idx) => (
                <div key={idx} className="skills-card reveal">
                  <h3 className="skills-cat-title">
                    {getCategoryIcon(cat.name)}
                    <span style={{ marginLeft: '0.5rem' }}>{cat.name}</span>
                  </h3>
                  <div className="skills-list">
                    {cat.items.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="skills-card reveal">
                <h3 className="skills-cat-title">
                  <Sparkles size={16} />
                  <span style={{ marginLeft: '0.5rem' }}>Core Strengths</span>
                </h3>
                <div className="skills-list">
                  {skills.strengths.map((strength, idx) => (
                    <span key={idx} className="skill-tag">{strength}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <span className="section-tag">— 03 / WORK</span>
            <h2 className="section-title">Featured SaaS projects.</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card reveal">
                  <div className="project-card-header">
                    <span className="project-number">{project.id}</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    <h3 className="project-name">
                      {project.name}
                      <ArrowUpRight size={16} className="project-name-arrow" />
                    </h3>
                  </a>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.type}
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          Live Site <ArrowUpRight size={13} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          GitHub <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="split-grid">
              <div>
                <span className="section-tag">— 04 / CAREER</span>
                <h2 className="section-title" style={{ marginBottom: '2rem' }}>Work Experience.</h2>
                <div className="timeline">
                  {experience.map((exp) => (
                    <div key={exp.id} className="timeline-item reveal">
                      <div className="timeline-dot"></div>
                      <div className="timeline-header">
                        <h3 className="timeline-title">{exp.company}</h3>
                        <span className="timeline-badge">{exp.role}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul style={{ paddingLeft: '1.1rem', margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ marginBottom: '0.45rem' }}>{pt}</li>
                        ))}
                      </ul>
                      <div className="project-tags">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="section-tag">— 05 / ACADEMICS &amp; FOCUS</span>
                <h2 className="section-title" style={{ marginBottom: '2rem' }}>Education &amp; Growth.</h2>
                
                <div className="leadership-list reveal">
                  {education.map((edu, idx) => (
                    <div key={idx} className="leadership-item" style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                        {edu.period}
                      </div>
                      <h3 className="lead-name" style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                      <p className="lead-role" style={{ color: 'var(--text-color)', fontWeight: 500, marginBottom: '0.25rem' }}>
                        {edu.institution} · <span style={{ color: 'var(--text-muted)' }}>{edu.location}</span>
                      </p>
                      <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem', borderRadius: '4px', marginTop: '0.4rem' }}>
                        {edu.score}
                      </div>
                      {edu.highlight && (
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.5' }}>
                          {edu.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="focus-callout" style={{ marginTop: '2.5rem' }}>
                  <div className="focus-callout-header">
                    <CheckCircle2 size={16} className="focus-callout-icon" />
                    <span className="focus-callout-title">Core Engineering Strengths</span>
                  </div>
                  <div className="skills-list" style={{ marginTop: '1rem' }}>
                    {skills.strengths.map((str, idx) => (
                      <span key={idx} className="skill-tag" style={{ borderStyle: 'dashed' }}>{str}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                      Key Focus Areas:
                    </div>
                    <ul style={{ paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {hero.focusAreas.slice(0, 6).map((focus, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3rem' }}>{focus}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: '8rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-tag">— 06 / REACH OUT</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Let's build.</h2>
            
            <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h3 className="contact-info-title">{contact.heading}</h3>
              <p className="contact-info-desc">{contact.description}</p>
              
              <div style={{ position: 'relative', marginTop: '1.5rem', padding: '1rem 0' }}>
                {/* Concentric Circles Background Backdrop */}
                <div className="concentric-circles-container">
                  <div className="concentric-circles-bg"></div>
                </div>
                
                {/* Staggered Social Pill Cluster */}
                <div className="social-pill-cluster">
                  <div className="social-pill-row row-1">
                    <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-btn wide">
                      <Linkedin size={18} />
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight size={14} className="arrow" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-pill-btn wide" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                      <FileText size={18} />
                      <span>View Resume</span>
                      <ArrowUpRight size={14} className="arrow" />
                    </a>
                  </div>
                  <div className="social-pill-row row-2">
                    <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <a href={contact.links.leetcode} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                      <Leetcode size={16} />
                      <span>LeetCode</span>
                    </a>
                  </div>
                  <div className="social-pill-row row-3">
                    <a href={`tel:${contact.links.phone}`} className="social-pill-btn">
                      <Phone size={16} />
                      <span>Call</span>
                    </a>
                    <a href={contact.links.whatsapp} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                      <MessageSquare size={16} />
                      <span>WhatsApp</span>
                    </a>
                    <a href={`mailto:${contact.links.email}`} className="social-pill-btn">
                      <Mail size={16} />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginTop: '3.5rem'
              }}>
                <MapPin size={14} />
                <span>{personal.location}</span>
                <span>•</span>
                <span className="hero-dot" style={{ display: 'inline-block', position: 'static', width: '6px', height: '6px' }}></span>
                <span>{personal.availability}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            © 2026 {personal.name} · Crafted with intention.
          </div>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Back to Top</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href={contact.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={contact.links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li><a href={`mailto:${contact.links.email}`}>Email</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
