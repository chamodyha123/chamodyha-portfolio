import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaMobileAlt,
  FaPalette,
  FaPlug,
  FaServer,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa"
import { SiPrisma } from "react-icons/si"
import FadeIn from "./FadeIn"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "C#", "ASP.NET Core", "PHP", "Laravel"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["SQL", "PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "API & Security",
    icon: FaShieldAlt,
    skills: ["REST APIs", "JWT Authentication", "Laravel Sanctum", "Swagger / OpenAPI", "Postman"],
  },
  {
    title: "ORM & Data Access",
    icon: SiPrisma,
    skills: ["Entity Framework Core", "Eloquent ORM", "Prisma"],
  },
  {
    title: "Real-Time & Cloud",
    icon: FaCloud,
    skills: ["Socket.IO", "Firebase", "Firebase Cloud Messaging", "Azure", "AWS", "Vercel", "Docker"],
  },
  {
    title: "Programming & Data",
    icon: FaLayerGroup,
    skills: ["Python", "Java", "Pandas", "Scikit-learn"],
  },
  {
    title: "UI/UX & Design",
    icon: FaPalette,
    skills: ["UI/UX Design", "Figma", "Graphic Design", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Development Tools",
    icon: FaTools,
    skills: ["Git", "GitHub", "VS Code", "Visual Studio", "IntelliJ IDEA", "PyCharm"],
  },
  {
    title: "Other Technologies",
    icon: FaPlug,
    skills: ["WordPress"],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="skills-container">
        <FadeIn>
          <header className="skills-header">
            <p className="skills-eyebrow"><span aria-hidden="true" />My Skills</p>
            <h2 id="skills-title">Tools that turn ideas into <span>working experiences.</span></h2>
            <p className="skills-description">
              A growing toolkit for building full-stack software, creating thoughtful
              interfaces, and bringing reliable digital products to life.
            </p>
          </header>
        </FadeIn>

        <div className="skills-categories">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <FadeIn key={title} delay={Math.min(index * 45, 360)}>
              <article className="skill-category">
                <div className="skill-category-heading">
                  <span className="skill-category-icon" aria-hidden="true"><Icon /></span>
                  <h3>{title}</h3>
                  <span className="skill-category-count">{String(skills.length).padStart(2, "0")}</span>
                </div>
                <div className="skill-chips">
                  {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
