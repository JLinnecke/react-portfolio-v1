import { useState } from "react";

import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard";
import Modal from "../Modal/Modal";

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

export default function Projects() {
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
