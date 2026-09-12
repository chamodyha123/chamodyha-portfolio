const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "C#",
      "ASP.NET Core",
      "PHP",
      "Laravel",
    ],
  },

  {
    title: "Mobile Development",
    skills: [
      "Flutter",
      "Dart",
    ],
  },

  {
    title: "Databases",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
    ],
  },

  {
    title: "API & Security",
    skills: [
      "REST APIs",
      "JWT Authentication",
      "Laravel Sanctum",
      "Swagger / OpenAPI",
      "Postman",
    ],
  },

  {
    title: "ORM & Data Access",
    skills: [
      "Entity Framework Core",
      "Eloquent ORM",
      "Prisma",
    ],
  },

  {
    title: "Real-Time & Cloud",
    skills: [
      "Socket.IO",
      "Firebase",
      "Firebase Cloud Messaging",
      "Azure",
      "AWS",
      "Vercel",
      "Docker",
    ],
  },

  {
    title: "Programming & Data",
    skills: [
      "Python",
      "Java",
      "Pandas",
      "Scikit-learn",
    ],
  },

  {
    title: "UI/UX & Design",
    skills: [
      "UI/UX Design",
      "Figma",
      "Graphic Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },

  {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "IntelliJ IDEA",
      "PyCharm",
    ],
  },

  {
    title: "Other Technologies",
    skills: [
      "WordPress",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>My Skills</h2>

        <p className="skills-description">
          Technologies and tools I use to design, develop, and build
          modern software applications.
        </p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category) => (
          <div
            className="skill-category"
            key={category.title}
          >
            <h3>{category.title}</h3>

            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div
                  className="skill-card"
                  key={skill}
                >
                  <span className="skill-dot"></span>

                  <span className="skill-name">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;