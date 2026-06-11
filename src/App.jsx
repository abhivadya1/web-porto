import "./App.css";

function App() {
  const skills = {
    "Programming": ["Java", "Python", "JavaScript", "SQL"],
    "Frontend": ["HTML", "CSS", "React", "Vite"],
    "Backend": ["Spring Boot", "Django", "REST API"],
    "Database": ["PostgreSQL", "MySQL", "SQLite"],
    "Tools": ["Git", "GitHub", "Postman", "Docker", "Figma", "JMeter"],
    "Concepts": ["OOP", "SOLID", "Testing", "Database Security", "UI/UX"]
  };

  const projects = [
    {
      title: "Inventory Katalog System",
      description:
        "Web application for managing product catalog, stock, and inventory operations with concurrency-safe stock update.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "JMeter"],
      highlight: "Backend, REST API, database transaction, concurrency handling",
      github: "https://github.com/abhivadya1"
    },
    {
      title: "FitIt! Fitness App",
      description:
        "UI/UX project for a fitness application with workout programs, personalization, and evaluation flow.",
      stack: ["Figma", "UI/UX", "Information Architecture", "SUS Evaluation"],
      highlight: "User flow, information architecture, usability testing",
      github: "https://github.com/abhivadya1"
    },
    {
      title: "Database Security Analysis",
      description:
        "Security analysis project focusing on database protection, authentication, authorization, and common security risks.",
      stack: ["SQL", "Database Security", "Documentation"],
      highlight: "Security analysis, risk finding, recommendation",
      github: "https://github.com/abhivadya1"
    }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Abhivadya</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hi, I am</p>
          <h1>Abhivadya</h1>
          <h2>Computer Science Student & Aspiring Software Engineer</h2>
          <p className="hero-description">
            I build web applications, backend systems, and user-centered digital
            products. I am interested in software engineering, database systems,
            web development, and UI/UX.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="/cv.pdf" className="btn secondary" target="_blank">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">{"</>"}</div>
          <h3>IT Portfolio</h3>
          <p>Web Development • Backend • Database • UI/UX</p>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-box">
          <p>
            I am a Faculty of Computer Science student with strong interest in
            software engineering, backend development, database systems, and
            user experience design. I enjoy building reliable applications and
            learning how to design systems that are scalable, secure, and easy
            to use.
          </p>
          <p>
            Through academic projects, I have worked with web applications,
            REST APIs, database design, software testing, and UI/UX evaluation.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>
              <div className="skill-list">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="stack-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p className="highlight">
                <strong>Highlight:</strong> {project.highlight}
              </p>

              <a href={project.github} target="_blank" className="project-link">
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Faculty of Computer Science</h3>
          <p>Undergraduate Student in Computer Science / Information Systems</p>
          <p className="muted">Relevant Coursework:</p>

          <div className="course-list">
            <span>Advanced Programming</span>
            <span>Database</span>
            <span>Software Engineering</span>
            <span>Statistics and Probability</span>
            <span>Computer Security</span>
            <span>Human-Computer Interaction</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact</h2>
        <p>
          I am open to internship opportunities, project collaboration, and
          software development discussions.
        </p>

        <div className="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://github.com/abhivadya1" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Abhivadya. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;