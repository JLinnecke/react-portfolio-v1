import Skill from "../Skill/Skill";

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

export default function Skills() {
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
