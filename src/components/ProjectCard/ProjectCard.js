import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function ProjectCard({
  project,
  setSelectedProjectImage,
  setSelectedProject,
}) {
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
