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

const projects = [
  {
    title: "eat-n-split",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  ipsum dolor sitamet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.",
    skills: ["html", "css", "javascript"],
    image: eatnsplit,
  },
  {
    title: "faraway",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  justo duo dolores et ea rebum. Stetclita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sitamet.t dolore magna aliquyam erat,sed diam voluptua.",
    skills: ["html", "css", "javascript"],
    image: faraway,
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

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
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
      <h1>Portfolio-react-v1</h1>
      <div className="nav">
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <img src={bewerbung} alt="J.Linnecke"></img>
      <Button>Contact me</Button>
    </section>
  );
}

function Projects() {
  return (
    <section className="project grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  );
}

function ProjectCard({ project, children }) {
  return (
    <div className="card">
      <div className="sidebar-left">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div className="project-img">
        <img src={project.image} alt={project.title} />
        <div className="btn-project">
          <Button>Live demo</Button>
          <Button>GitHub</Button>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Skills</h2>
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
    <section className="contact">
      <h2>Contact</h2>
      <div className="grid">
        <div className="sidebar-left">
          <h3>Contact me</h3>
          <input type="text" placeholder="email"></input>
          <textarea type="text" maxLength={1000}></textarea>
        </div>
        <div className="sidebar-right">
          <h3>Phone</h3>
          <p>0541654161641</p>
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

function Button({ children, onClick }) {
  return <button className="btn">{children}</button>;
}
