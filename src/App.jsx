import "./App.css";

function App() {
return ( <div className="portfolio">


  {/* Navigation */}
  <nav className="navbar">
   

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  {/* Hero */}
  <section className="hero" id="home">
    <div className="hero-content">
      <p className="intro">HELLO, I'M</p>

      <h1>Tanya Marshman</h1>

      <h2>Web Developer</h2>

      <p>
        I'm building modern, responsive websites and applications
        using React, JavaScript, SQL, and other web technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="button">
          View My Projects
        </a>

        <a href="#contact" className="button secondary-button">
          Contact Me
        </a>
      </div>
    </div>
  </section>

  {/* About */}
  <section className="section about" id="about">
    <p className="section-label">ABOUT ME</p>

    <h2>Building My Future in Web Development</h2>

    <p>
      I'm an aspiring web developer with a background in customer
      service, technology support, and security. I'm currently
      expanding my skills in front-end and full-stack web development.
    </p>

    <p>
      I enjoy creating clean, responsive websites and applications
      that provide a positive user experience. I'm continuing to
      build real-world projects while developing my skills with
      React, JavaScript, SQL, Git, and GitHub.
    </p>
  </section>

  {/* Skills */}
  <section className="section" id="skills">
    <p className="section-label">MY SKILLS</p>

    <h2>Technologies I Work With</h2>

    <div className="skills-grid">
      <div className="skill-card">HTML5</div>
      <div className="skill-card">CSS3</div>
      <div className="skill-card">JavaScript</div>
      <div className="skill-card">React</div>
      <div className="skill-card">SQL</div>
      <div className="skill-card">Git & GitHub</div>
      <div className="skill-card">Responsive Design</div>
      <div className="skill-card">Vite</div>
      <div className="skill-card">VS Code</div>
    </div>
  </section>
 
{/* Education */}
<section className="section education" id="education">
  <p className="section-label">EDUCATION</p>

  <h2>Web Development Education</h2>

  <div className="education-card">
    <p className="education-date">CERTIFICATE</p>

    <h3>Web & Mobile Design</h3>

    <h4>St. Philip's College</h4>

    <p>
      Studied web and mobile design with a focus on building websites,
      responsive layouts, user interfaces, and foundational web development
      skills.
    </p>
  </div>
</section>

 {/* Projects */}
<section className="section projects" id="projects">
  <p className="section-label">MY WORK</p>

  <h2>Featured Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-content">
        <p className="project-number">01</p>

        <h3>Personal Portfolio</h3>

        <p>
          A responsive developer portfolio built to showcase my skills,
          projects, education, and professional journey as I transition
          into web development.
        </p>

        <p className="project-tech">
          React • JavaScript • CSS • Vite
        </p>

        <div className="project-buttons">
          <a
            href="https://github.com/TanyaM5/my-portfolio"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            GitHub
          </a>

          <a
            href="https://tanyam5.github.io/my-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="button secondary-project-button"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-content">
        <p className="project-number">02</p>

        <h3>LaundroExpress</h3>

        <p>
          A responsive laundry service website designed to give customers
          clear information about services and create an easy way to
          connect with the business.
        </p>

        <p className="project-tech">
          HTML • CSS • Responsive Web Design
        </p>

      <div className="project-buttons">
  <a
    href="https://github.com/TanyaM5/LaundroExpress"
    target="_blank"
    rel="noreferrer"
    className="button"
  >
    GitHub
  </a>

  <a
    href="https://tanyam5.github.io/LaundroExpress/"
    target="_blank"
    rel="noreferrer"
    className="button secondary-project-button"
  >
    Live Demo
  </a>
</div>
      </div>
    </div>

  </div>

  <p className="coming-soon">
    More projects coming soon as I continue building my portfolio.
  </p>
</section>

  {/* Contact */}
  <section className="section contact" id="contact">
    <p className="section-label">GET IN TOUCH</p>

    <h2>Let's Connect</h2>

    <p>
      I'm interested in web development opportunities, technology
      roles, and connecting with other professionals in the industry.
    </p>

    <a href="mailto:tonyamarshman@yahoo.com" className="button">
      Email Me
    </a>
  </section>

  {/* Footer */}
  <footer>
    <p>© 2026 Tanya Marshman. Built with React.</p>
  </footer>

</div>
);
}
export default App;
