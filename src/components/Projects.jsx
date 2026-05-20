import sparehub from "../assets/projects/sparehub.png"
import fivesamath from "../assets/projects/fivesamath.png"
import nextstep from "../assets/projects/nextstep.png"

function Projects() {
  const projects = [
    {
      title: "Spare Part Shop",
      description:
        "Vehicle spare parts ecommerce platform with modern UI design.",

      image: sparehub,

      tech: ["HTML", "CSS", "Bootstrap"],

      github: "https://github.com/chamodyha123/spare-part-shop.git",
    },

    {
      title: "FiveSamath API",

      description:
        "AI-powered learning platform backend developed using ASP.NET.",

      image: fivesamath,

      tech: ["ASP.NET", "C#", "SQL"],

      github: "https://github.com/chamodyha123/FiveSamath.API.git",
    },

    {
      title: "NextStep Platform",

      description:
        "Full-stack collaborative project developed using modern technologies.",

      image: nextstep,

      tech: ["React", "ASP.NET", "JWT"],

      github: "https://github.com/dilshan24142/NextStep.git",
    },
  ]

  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  View GitHub
                </button>
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects