import { useEffect, useState } from "react";
import "./App.css";

const EMAIL = "abhivadyanan@gmail.com";
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [messageForm, setMessageForm] = useState({
    senderEmail: "",
    subject: "",
    message: ""
  });

  const skills = {
    Languages: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "SQL", icon: "devicon-mysql-original colored" }
    ],
    Backend: [
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "REST API", fallback: "API" }
    ],
    Frontend: [
      { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
    ],
    Databases: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-original colored" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" }
    ],
    "Tools & Design": [
      { name: "Git & GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "JMeter", fallback: "JM" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ]
  };

  const projects = [
    {
      title: "Risklens AI",
      label: "AI Risk Analysis",
      description:
        "AI-powered risk analysis project focused on identifying, organizing, and presenting risk insights through a web application.",
      stack: ["AI", "Web Dev", "Data Analysis"],
      github: "https://github.com/americano-indonesiayes/risklens-ai",
      featured: true
    },
    {
      title: "JSON (Jasa Titip)",
      description:
        "National online personal shopping service built as a collaborative engineering application.",
      stack: ["Spring Boot", "Django"],
      github: "https://github.com/orgs/advprog-2026-A3-project/repositories"
    },
    {
      title: "Xcore",
      description:
        "Core application feature development focusing on backend integration and scalability.",
      stack: ["Backend", "Database"],
      github: "https://github.com/pbp-kelompok-10/xcore"
    },
    {
      title: "Football Shop",
      description:
        "E-commerce web application for football merchandise, product browsing, and shopping-related flows.",
      stack: ["Frontend", "E-commerce"],
      github: "https://github.com/abhivadya1/football-shop/tree/master"
    },
    {
      title: "Xcore Mobile",
      description:
        "Mobile version of Xcore, bringing the main application flows into a mobile-first experience.",
      stack: ["Mobile", "API"],
      github: "https://github.com/pbp-kelompok-10/xcore-mobile"
    },
    {
      title: "Football Shop Mobile",
      description:
        "Mobile companion for the Football Shop project, focused on compact shopping flows.",
      stack: ["Mobile", "E-commerce"],
      github: "https://github.com/abhivadya1/football-shop-mobile/tree/prod"
    }
  ];

  const experiences = [
    {
      role: "DAD General Staff",
      organization: "COMPFEST",
      type: "Seasonal",
      period: "Apr 2025 - Mar 2026",
      duration: "1 yr",
      description:
        "Part of the execution team for one of the largest student-led IT events in Indonesia.",
      image: "/experience/compfest.png"
    },
    {
      role: "Staff Divisi Kekeluargaan dan Internal",
      organization: "Keluarga Mahasiswa Hindu Dharma Universitas Indonesia",
      type: "Seasonal",
      period: "May 2025 - Feb 2026",
      duration: "10 mos",
      description:
        "Managing internal organization dynamics and community engagement programs.",
      image: "/experience/kmhd.png"
    },
    {
      role: "Mentor Python Programming",
      organization: "Dasar-Dasar Pemrograman 0",
      type: "Self-employed",
      period: "Jul 2025 - Sep 2025",
      duration: "3 mos",
      description:
        "Guiding novice programmers through Python fundamentals, data structures, and problem solving.",
      image: "/experience/ddp0.png"
    },
    {
      role: "Pekan Ristek: NetSOS",
      organization: "RISTEK Fakultas Ilmu Komputer Universitas Indonesia",
      type: "Self-employed",
      period: "Nov 2024 - Dec 2024",
      duration: "2 mos",
      description:
        "Contributed to a technology-focused event program within the faculty ecosystem.",
      image: "/experience/ristek.png"
    },
    {
      role: "Operational Staff HFG UI",
      organization: "Keluarga Mahasiswa Hindu Dharma Universitas Indonesia",
      type: "Seasonal",
      period: "Sep 2024 - Nov 2024",
      duration: "3 mos",
      description:
        "Supported operational planning and execution for HFG UI activities.",
      image: "/experience/kmhd.png"
    }
  ];

  const aboutHighlights = [
    {
      title: "Technical",
      detail: "Backend & API Logic",
      icon: "devicon-devicon-plain"
    },
    {
      title: "Creative",
      detail: "Modern UI/UX Design",
      icon: "devicon-figma-plain colored"
    },
    {
      title: "Structured",
      detail: "Database Architecture",
      icon: "devicon-postgresql-plain colored"
    },
    {
      title: "Collaborative",
      detail: "Team-based Systems",
      icon: "devicon-github-original"
    }
  ];

  useEffect(() => {
    const updateNavigationHeight = () => {
      const navbar = document.querySelector(".navbar");
      const navHeight = navbar?.getBoundingClientRect().height ?? 86;
      document.documentElement.style.setProperty("--nav-height", `${navHeight}px`);
    };

    const updateActiveSection = () => {
      const navHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--nav-height")
        ) || 86;
      const scrollPosition = window.scrollY + navHeight + 80;
      const currentSection = NAV_ITEMS.reduce((current, item) => {
        const section = document.getElementById(item.id);
        if (!section) return current;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollPosition) {
          return item.id;
        }

        return current;
      }, "home");

      setActiveSection(currentSection);
    };

    updateNavigationHeight();
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateNavigationHeight);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateNavigationHeight);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const messageSubject = messageForm.subject.trim() || "Portfolio Contact";
  const messageBody = [
    messageForm.senderEmail.trim()
      ? `From / Reply to: ${messageForm.senderEmail.trim()}`
      : "",
    messageForm.message.trim()
  ]
    .filter(Boolean)
    .join("\n\n");
  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    messageSubject
  )}&body=${encodeURIComponent(messageBody)}`;

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          Abhivadya
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              className={activeSection === item.id ? "active" : undefined}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className={activeSection === "contact" ? "nav-cta active" : "nav-cta"}
          href="#contact"
          onClick={() => setActiveSection("contact")}
        >
          Let's Talk
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="status-pill">Available for Internships</p>
            <h1>
              Anak Agung Ngurah
              <span> Abhivadya Nandana</span>
            </h1>
            <h2 className="hero-role">
              Computer Science Student & Aspiring Software Engineer
              <span>
                Interested in Full-Stack Development, Backend Systems, and UI/UX
              </span>
            </h2>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Work
              </a>
              <a
                href="https://www.linkedin.com/in/anak-agung-ngurah-abhivadya-nandana-3a5b0b324/"
                className="btn secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile portrait">
            <div className="profile-showcase">
              <div className="profile-glow"></div>
              <div className="profile-frame">
                <img
                  src="/images/profile.png"
                  alt="Anak Agung Ngurah Abhivadya Nandana"
                />
              </div>

              <div className="profile-stat projects-stat">
                <strong>6</strong>
                <span>Projects</span>
              </div>
              <div className="profile-stat experience-stat">
                <strong>5</strong>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <h2>About Me</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I am a Faculty of Computer Science student with a strong
                interest in software engineering, backend development, database
                systems, and user experience design. I enjoy building reliable
                applications and learning how to design systems that are
                scalable, secure, and easy to use.
              </p>
              <p>
                Through academic projects, I have worked with web applications,
                REST APIs, database design, software testing, and UI/UX
                evaluation. My approach focuses on precision, performance, and
                clean user journeys.
              </p>
            </div>

            <div className="about-highlights">
              {aboutHighlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <i className={item.icon} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <h3>{category}</h3>
                <div className="skill-list">
                  {items.map((item) => (
                    <span className="skill-chip" key={item.name}>
                      {item.icon ? (
                        <i className={item.icon} aria-hidden="true"></i>
                      ) : (
                        <strong>{item.fallback}</strong>
                      )}
                      <small>{item.name}</small>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "featured" : ""}`}
                key={project.title}
              >
                {project.label && <p className="project-label">{project.label}</p>}
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <h2>Experience</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.role}>
                <div className="experience-logo">
                  <img src={experience.image} alt={`${experience.organization} logo`} />
                </div>
                <div className="experience-content">
                  <div className="experience-topline">
                    <div>
                      <h3>{experience.role}</h3>
                      <p>
                        {experience.organization} | {experience.type}
                      </p>
                    </div>
                    <span>
                      {experience.period} | {experience.duration}
                    </span>
                  </div>
                  <p className="experience-description">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="final-sections">
          <section id="education" className="section final-section education-section">
            <div className="section-heading">
              <h2>Education</h2>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <img
                  src="/images/universitas-indonesia.png"
                  alt="Universitas Indonesia logo"
                />
              </div>
              <div>
                <h3>Universitas Indonesia</h3>
                <p>Faculty of Computer Science</p>
                <span>2024 - 2028</span>
              </div>
            </div>
          </section>

          <section id="contact" className="section final-section contact-section">
            <div className="section-heading">
              <h2>Get In Touch</h2>
            </div>
            <div className="contact-card">
              <div className="contact-copy">
                <p>
                  Open to internship opportunities, project collaboration, and
                  software development discussions.
                </p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <div className="contact-links">
                  <a href="https://github.com/abhivadya1" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anak-agung-ngurah-abhivadya-nandana-3a5b0b324/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <form className="message-form">
                <label htmlFor="sender-email">Your Email</label>
                <input
                  id="sender-email"
                  onChange={(event) =>
                    setMessageForm((current) => ({
                      ...current,
                      senderEmail: event.target.value
                    }))
                  }
                  placeholder="your.email@example.com"
                  type="email"
                  value={messageForm.senderEmail}
                />

                <label htmlFor="message-subject">Subject</label>
                <input
                  id="message-subject"
                  onChange={(event) =>
                    setMessageForm((current) => ({
                      ...current,
                      subject: event.target.value
                    }))
                  }
                  placeholder="Internship opportunity"
                  type="text"
                  value={messageForm.subject}
                />

                <label htmlFor="message-body">Message</label>
                <textarea
                  id="message-body"
                  onChange={(event) =>
                    setMessageForm((current) => ({
                      ...current,
                      message: event.target.value
                    }))
                  }
                  placeholder="Hi Abhivadya, I would like to talk about..."
                  rows="5"
                  value={messageForm.message}
                />

                <a className="message-submit" href={mailtoLink}>
                  Send Message
                </a>
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <h2>Abhivadya</h2>
        <div>
          <a href="https://www.linkedin.com/in/anak-agung-ngurah-abhivadya-nandana-3a5b0b324/">
            LinkedIn
          </a>
          <a href="https://github.com/abhivadya1">GitHub</a>
          <a href={`mailto:${EMAIL}`}>Mail</a>
        </div>
        <p>(c) 2026 Anak Agung Ngurah Abhivadya Nandana. Built with precision.</p>
      </footer>
    </div>
  );
}

export default App;
