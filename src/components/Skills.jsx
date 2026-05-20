const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Bootstrap",
  "Next.js",
  "Node.js",
  "C#",
  "SQL",
  "UI/UX Design",
  "Graphic Design",
  "WordPress",
  "Figma"
]

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills