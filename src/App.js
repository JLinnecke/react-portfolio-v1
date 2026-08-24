import logo from "./assets/logo.png";
import bewerbung from "./assets/bewerbung-1.jpg";
import eatnsplit from "./assets/eat-n-split.png";
import faraway from "./assets/faraway.png";
import css from "./assets/css3-plain.svg";
import html from "./assets/html5-plain.svg";
import javascript from "./assets/javascript-plain.svg";
import mongodb from "./assets/mongodb-plain.svg";
import react from "./assets/react-original.svg";
import supabase from "./assets/supabase-plain.svg";
import github from "./assets/github-original.svg";
import linkedin from "./assets/linkedin-plain.svg";
import certificateJS from "./assets/zertifikat-javascript-WZ.png";
import certificateJFD from "./assets/certificate-jlinnecke.png";

import { useState } from "react";

const projects = [
  {
    title: "eat-n-split",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  ipsum dolor sitamet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
    skills: ["html", "css", "javascript"],
    image: eatnsplit,
    github: "https://github.com/JLinnecke/react-app-eat-n-split",
    demo: "https://github.com/JLinnecke",
  },
  {
    title: "faraway",
    description:
      "Kleine packlisten app um sich richtig auf den urlaub vorzubereiten und um nichts zu vergessen!",
    skills: ["html", "css", "javascript", "react"],
    image: faraway,
    github: "https://github.com/JLinnecke/react-travel-list-course-project",
    demo: "https://github.com/JLinnecke",
  },
];

const skills = [
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "JavaScript", image: javascript },
  { title: "React", image: react },
  { title: "MongoDB", image: mongodb },
  { title: "Supabase", image: supabase },
];

const certifications = [
  {
    title: "Developer Akademie Junior Frontend developer",
    image: certificateJFD,
  },
  { title: "JavaScript", image: certificateJS },
];

function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"></img>

      <div className="nav">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Junior Frontend Developer</h1>
        <div className="hero-line"></div>
        <h2 className="hero-name">Johannes Linnecke</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <div className="hero-buttons">
          <Button className="btn">Projects</Button>
          <Button className="btn">Contact me</Button>
        </div>
      </div>

      <div className="hero-img">
        <img src={bewerbung} alt="J.Linnecke" className="profile-img"></img>
        <div className="hero-skills">
          <a href="#skills">
            {" "}
            <img src={javascript} alt="JavaScript"></img>{" "}
          </a>
          <a href="#skills">
            {" "}
            <img src={react} alt="react"></img>
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedSkill, setSelectedSkill] = useState("ALL");
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);

  function handleClose() {
    setSelectedProjectImage(null);
  }

  const filteredProjects =
    selectedSkill === "ALL"
      ? projects
      : projects.filter((project) =>
          project.skills.includes(selectedSkill.toLowerCase()),
        );

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <div className="project-filter">
        <Button onClick={() => setSelectedSkill("ALL")}>All</Button>
        <Button onClick={() => setSelectedSkill("HTML")}>HTML</Button>
        <Button onClick={() => setSelectedSkill("CSS")}>CSS</Button>
        <Button onClick={() => setSelectedSkill("JavaScript")}>
          JavaScript
        </Button>
        <Button onClick={() => setSelectedSkill("React")}>React</Button>
        <p>Aktiver filter: {selectedSkill}</p>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            project={project}
            key={project.title}
            selectedProjectImage={selectedProjectImage}
            setSelectedProjectImage={setSelectedProjectImage}
          />
        ))}
      </div>
      {selectedProjectImage && (
        <Modal image={selectedProjectImage} onClose={handleClose}></Modal>
      )}
    </section>
  );
}

function ProjectCard({
  project,
  selectedProjectImage,
  setSelectedProjectImage,
}) {
  function handleGitHub() {
    window.open(project.github, "_blank");
  }

  function handleLiveDemo() {
    window.open(project.demo, "_blank");
  }

  return (
    <div className="card">
      <div className="sidebar-left">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-img">
        <img
          src={project.image}
          alt={project.title}
          onClick={() => setSelectedProjectImage(project.image)}
        />
        <div className="btn-project">
          <Button className="btn" onClick={handleLiveDemo}>
            Live demo
          </Button>
          <Button className="btn" onClick={handleGitHub}>
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  function handleClose() {
    setSelectedCertificate(null);
  }

  return (
    <section className="certificate">
      <div className="certificate-headline">
        <h2>Zertifikate</h2>
      </div>

      <div className="certificate-list">
        {certifications.map((certificate) => (
          <CertificationCard
            certificate={certificate}
            image={certificate.image}
            key={certificate.title}
            selectedCertificate={selectedCertificate}
            setSelectedCertificate={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate && (
        <Modal image={selectedCertificate} onClose={handleClose} />
      )}
    </section>
  );
}

function CertificationCard({ certificate, image, setSelectedCertificate }) {
  return (
    <div className="certificate-img">
      <img
        src={image}
        alt={certificate.title}
        onClick={() => setSelectedCertificate(image)}
      ></img>
    </div>
  );
}

function Modal({ image, onClose }) {
  return (
    <>
      <div className="modal" onClick={onClose}>
        <Button className="close" onClick={onClose}>
          &times;
        </Button>

        <img src={image} alt="certificate"></img>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <h2 id="skills">Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.title}></Skill>
        ))}
      </div>
    </>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.image} alt={skill.title}></img>
      <p>{skill.title}</p>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="grid">
        <div className="sidebar-left">
          <h3>Contact me</h3>
          <a href="mailto:mail@example.de">E-Mail schreiben</a>
        </div>
        <div className="sidebar-right">
          <h3>Phone</h3>
          <a href="tel:+4954641654564">0541654161641</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer grid">
      <p>Impressum</p>
      <div className="icons">
        <img src={github} alt="GitHub"></img>
        <img src={linkedin} alt="LinkedIn"></img>
      </div>
    </footer>
  );
}
