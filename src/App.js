import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/yumequest_logo.png" alt="YumeQuest" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#contact" className="nav-cta">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-brand">YumeQuest</div>
          <h1 className="hero-title">
            We are on a quest to make our dreams into reality
          </h1>
          <p className="hero-description">
            A software company focused on creating innovative products that bring 
            unique digital experiences to life.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#services" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h3>Interactive Games</h3>
              <p>Building engaging games that combine innovative gameplay with captivating storytelling.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Software Innovation</h3>
              <p>Developing cutting-edge software products that solve real-world problems with creativity and technology.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Digital Experiences</h3>
              <p>Crafting unique digital experiences that push the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">We are currently working on</h2>
          <div className="project-card-container">
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-name">solfps.xyz</h3>
                <span className="project-badge">Hackathon Entry</span>
              </div>
              <p className="project-description">
                Entry for Solana Colosseum Cypherpunk Hackathon - Building innovative solutions on the Solana blockchain.
              </p>
              <div className="project-links">
                <a 
                  href="https://solfps.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link project-website"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Visit Website
                </a>
                <a 
                  href="https://x.com/solfps_xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link project-twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About YumeQuest</h2>
          <div className="about-content">
            <p className="about-text">
              YumeQuest is a private limited company registered in Estonia, 
              focused on creating and publishing our own games and software. 
              We also accept occasional contract work for select projects, 
              combining our expertise with a passion for innovation to deliver exceptional digital products.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-value">Est. 2025</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat">
                <div className="stat-value">Estonia</div>
                <div className="stat-label">Registered</div>
              </div>
              <div className="stat">
                <div className="stat-value">Global</div>
                <div className="stat-label">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="section-container">
          <h2 className="section-title">Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">VE</div>
              </div>
              <h3 className="member-name">Victor Mak</h3>
              <p className="member-role">Founder</p>
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/victorevolves" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/victorevolves" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link x-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-description">
            Interested in our products or have a contract opportunity? We'd love to hear from you.
          </p>
          <a href="mailto:hello@yumequest.com" className="btn-primary">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-social">
            <a 
              href="https://x.com/yumequestxyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/yumequest/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com/yumequest.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/37254020765" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/yumequest/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="footer-text">
            <p>© 2025 YumeQuest OÜ. All rights reserved.</p>
            <p className="footer-subtext">Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 105, 11312</p>
            <p className="footer-subtext">
              <a href="mailto:contact@yumequest.xyz" style={{color: 'inherit', textDecoration: 'none'}}>contact@yumequest.xyz</a>
              {' • '}
              <a href="tel:+37254020765" style={{color: 'inherit', textDecoration: 'none'}}>+372 540 20765</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
