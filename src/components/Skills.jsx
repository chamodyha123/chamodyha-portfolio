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
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "Tailwind CSS", "Bootstrap", "React Router", "Axios", "WordPress", "Responsive Web Development"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    skills: ["Java", "C#", "Python", "PHP", "Node.js", "Express.js", "ASP.NET Core", "Spring Boot", "Laravel", "RESTful API Development"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    skills: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore", "Provider State Management", "Hive", "Mobile UI/UX Development"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["SQL", "PostgreSQL", "Microsoft SQL Server", "MySQL", "Cloud Firestore", "Relational Database Design", "Database Migrations", "Flyway"],
  },
  {
    title: "API & Security",
    icon: FaShieldAlt,
    skills: ["REST APIs", "JWT Authentication", "OAuth", "Role-Based Access Control", "API Security", "Laravel Sanctum", "Swagger / OpenAPI", "Postman", "Thunder Client"],
  },
  {
    title: "ORM & Data Access",
    icon: SiPrisma,
    skills: ["Entity Framework Core", "Spring Data JPA", "JPA / Hibernate", "Prisma ORM", "Eloquent ORM"],
  },
  {
    title: "Real-Time & Cloud",
    icon: FaCloud,
    skills: ["Firebase", "GitHub Actions", "Vercel", "Microsoft Azure", "Cloudflare", "Docker"],
  },
  {
    title: "Programming & Data",
    icon: FaLayerGroup,
    skills: ["Object-Oriented Programming", "MVC Architecture", "Repository and Service Patterns", "Software Architecture", "Agile Development", "Software Testing", "CI/CD Fundamentals"],
  },
  {
    title: "UI/UX & Design",
    icon: FaPalette,
    skills: ["Figma", "Wireframing", "High-Fidelity Prototyping", "Human-Computer Interaction", "Usability Evaluation", "Interaction Design", "Responsive UI Design", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  },
  {
    title: "Development Tools",
    icon: FaTools,
    skills: ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "IntelliJ IDEA", "Maven"],
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
