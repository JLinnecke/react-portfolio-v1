import logo from "./assets/logo.png";
import bewerbung from "./assets/bewerbung-1.jpg";

import certificateJS from "./assets/zertifikat-javascript-WZ.png";
import certificateJFD from "./assets/certificate-jlinnecke.png";

import "./legal.css";
import Impressum from "./pages/impressum.js";
import Datenschutz from "./pages/datenschutz.js";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "Join",
    description:
      "Kanban-Board zum Verwalten und Organisieren von Tasks. Aufgaben und Kontakte können selbstständig angelegt und verwaltet werden. Firebase dient als Backend für Datenspeicherung und Authentifizierung.",
    skills: ["html", "css", "javascript"],
    images: [
      "/imgs/join/join1.webp",
      "/imgs/join/join2.webp",
      "/imgs/join/join3.webp",
    ],
    github: "https://github.com/JLinnecke/join-kanban-board",
    demo: "https://join-kanban-board.netlify.app/index.html",
  },
  {
    title: "SkyRadar",
    description:
      "Wetter-App, die Daten aus verschiedenen APIs verarbeitet, um aktuelle Wetterdaten und zukünftige Wettervorhersagen anzuzeigen.",
    skills: ["html", "css", "javascript", "react"],
    images: ["/imgs/skyradar/skyradar1.webp", "/imgs/skyradar/skyradar2.webp"],
    github: "https://github.com/JLinnecke/weather-app",
    demo: "https://skyradar-app.netlify.app/",
  },
];

const skills = [
  { title: "HTML", image: "/imgs/skills/html5-plain.svg" },
  { title: "CSS", image: "/imgs/skills/css3-plain.svg" },
  { title: "JavaScript", image: "/imgs/skills/javascript-plain.svg" },
  {
    title: "React",
    image: "/imgs/skills/react-original.svg",
    status: "inProgress",
  },
  {
    title: "Next.Js",
    image: "/imgs/skills/nextjs-original.svg",
    status: "upcoming",
  },
  {
    title: "Supabase",
    image: "/imgs/skills/supabase-plain.svg",
    status: "upcoming",
  },
  {
    title: "TypeScript",
    image: "/imgs/skills/typescript-original.svg",
    status: "upcoming",
  },
  {
    title: "PHP",
    image: "/imgs/skills/php-plain.svg",
    status: "upcoming",
  },
  {
    title: "MySQL",
    image: "/imgs/skills/mysql-original.svg",
    status: "upcoming",
  },
];

const certifications = [
  {
    title: "Developer Akademie Junior Frontend developer",
    image: certificateJFD,
  },
  {
    title: "JavaScript",
    image: certificateJS,
  },
];

export default function App() {
  if (window.location.pathname === "/impressum") {
    return <Impressum />;
  }

  if (window.location.pathname === "/datenschutz") {
    return <Datenschutz />;
  }

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />

      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Junior Frontend Developer</h1>

        <div className="hero-line" />

        <h2 className="hero-name">Johannes Linnecke</h2>

        <p>
          Nach zwölf Jahren bei der Bundeswehr und meiner Ausbildung zum
          Fachinformatiker für Systemintegration habe ich mich beruflich neu in
          Richtung Webentwicklung orientiert. Seit 2023 bilde ich mich
          kontinuierlich weiter und habe meinen Schwerpunkt auf moderne
          Frontend-Entwicklung mit JavaScript und React gelegt. Mein Ziel ist
          der professionelle Einstieg in die Web- und Softwareentwicklung, bei
          dem ich meine bisherigen Kenntnisse einbringen und mich fachlich
          kontinuierlich weiterentwickeln kann.
        </p>

        <div className="hero-icons">
          <div className="hero-info-item">
            <img
              src="/imgs/icons/location.webp"
              alt="location Bad Bodenteich"
            />
            <span>Bad Bodenteich</span>
          </div>

          <div className="hero-info-item">
            <img src="/imgs/icons/work.webp" alt="work Remote / Hybrid" />
            <span>Remote / Hybrid</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a className="btn" href="#projects">
            Projects
          </a>

          <a className="btn" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img src={bewerbung} alt="J. Linnecke" className="profile-img" />

        <div className="hero-skills">
          <a href="#skills">
            <img src="/imgs/skills/javascript-plain.svg" alt="JavaScript" />
          </a>

          <a href="#skills">
            <img src="/imgs/skills/react-original.svg" alt="React" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedSkill, setSelectedSkill] = useState("ALL");
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleClose() {
    setSelectedProjectImage(null);
    setSelectedProject(null);
  }

  const filteredProjects =
    selectedSkill === "ALL"
      ? projects
      : projects.filter((project) =>
          project.skills.includes(selectedSkill.toLowerCase()),
        );

  return (
    <section className="section projects" id="projects">
      <h2>Projects</h2>

      <div className="project-filter">
        {["ALL", "HTML", "CSS", "JavaScript", "React"].map((skill) => (
          <Button
            key={skill}
            className={`btn filter ${selectedSkill === skill ? "active" : ""}`}
            onClick={() => setSelectedSkill(skill)}
          >
            {skill === "ALL" ? "All" : skill}
          </Button>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <ProjectCard
            project={project}
            key={project.title}
            setSelectedProjectImage={setSelectedProjectImage}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {selectedProjectImage && selectedProject && (
        <Modal
          image={selectedProjectImage}
          images={selectedProject.images}
          onClose={handleClose}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, setSelectedProjectImage, setSelectedProject }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((currentIndex) =>
        currentIndex === project.images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  function handleGitHub() {
    window.open(project.github, "_blank");
  }

  function handleLiveDemo() {
    window.open(project.demo, "_blank");
  }

  return (
    <article className="project-card">
      <div className="project-info">
        <h3>{project.title}</h3>

        <div className="project-skills">
          {project.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <p>{project.description}</p>
      </div>

      <div className="project-media">
        <div className="project-image-wrap">
          <img
            src={project.images[imageIndex]}
            alt={project.title}
            onClick={() => {
              setSelectedProjectImage(project.images[imageIndex]);
              setSelectedProject(project);
            }}
          />

          <div className="image-dots">
            {project.images.map((_, index) => (
              <button
                type="button"
                aria-label={`Bild ${index + 1} anzeigen`}
                key={index}
                className={`image-dot ${index === imageIndex ? "active" : ""}`}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="project-buttons">
          <Button className="btn" onClick={handleLiveDemo}>
            Live demo
          </Button>

          <Button className="btn" onClick={handleGitHub}>
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  function handleClose() {
    setSelectedCertificate(null);
  }

  return (
    <section className="section certificates">
      <h2>Zertifikate</h2>

      <div className="certificate-list">
        {certifications.map((certificate) => (
          <CertificationCard
            certificate={certificate}
            key={certificate.title}
            setSelectedCertificate={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate && (
        <Modal
          image={selectedCertificate}
          images={certifications.map((certificate) => certificate.image)}
          onClose={handleClose}
        />
      )}
    </section>
  );
}

function CertificationCard({ certificate, setSelectedCertificate }) {
  return (
    <button
      type="button"
      className="certificate-card"
      onClick={() => setSelectedCertificate(certificate.image)}
    >
      <img src={certificate.image} alt={certificate.title} />
    </button>
  );
}

function Modal({ image, images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(
    images ? images.indexOf(image) : 0,
  );

  function handlePrevious(e) {
    e?.stopPropagation();

    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function handleNext(e) {
    e?.stopPropagation();

    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((index) =>
          index === 0 ? images.length - 1 : index - 1,
        );
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((index) =>
          index === images.length - 1 ? 0 : index + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, images.length]);

  return (
    <div className="modal" onClick={onClose}>
      <Button className="modal-close" onClick={onClose}>
        &times;
      </Button>

      {images?.length > 1 && (
        <Button
          className="modal-arrow modal-arrow-left"
          onClick={handlePrevious}
        >
          &#10094;
        </Button>
      )}

      <img
        src={images ? images[currentIndex] : image}
        alt="Vergrößerte Ansicht"
        onClick={(e) => e.stopPropagation()}
      />

      {images?.length > 1 && (
        <Button className="modal-arrow modal-arrow-right" onClick={handleNext}>
          &#10095;
        </Button>
      )}
    </div>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.title} />
        ))}
      </div>
    </section>
  );
}

function Skill({ skill }) {
  return (
    <div className={`skill-card ${skill.status || ""}`}>
      <img src={skill.image} alt={skill.title} />

      <p>{skill.title}</p>

      {skill.status === "inProgress" && <span>In Progress</span>}

      {skill.status === "upcoming" && <span>Upcoming Skill</span>}
    </div>
  );
}

function Contact() {
  const email = "jlinnecke@gmail.com";

  function handleCopyEmail() {
    navigator.clipboard.writeText(email);
  }

  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        <div className="contact-item">
          <h3>E-mail</h3>

          <a href={`mailto:${email}`}>E-Mail schreiben</a>

          <Button className="copy-btn" onClick={handleCopyEmail}>
            E-Mail kopieren
          </Button>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>

          <a href="tel:+4915165934150">Call me</a>
        </div>
      </div>
    </section>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-legal">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <span>© 2026 Johannes Linnecke</span>
      </div>

      <div className="footer-icons">
        <a href="https://github.com/JLinnecke" target="_blank" rel="noreferrer">
          <img src="/imgs/skills/github-original.svg" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/johannes-linnecke/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/imgs/skills/linkedin-plain.svg" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
