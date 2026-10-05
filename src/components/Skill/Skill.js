export default function Skill({ skill }) {
  return (
    <div className={`skill-card ${skill.status || ""}`}>
      <img src={skill.image} alt={skill.title} />

      <p>{skill.title}</p>

      {skill.status === "inProgress" && <span>In Progress</span>}

      {skill.status === "upcoming" && <span>Upcoming Skill</span>}
    </div>
  );
}
