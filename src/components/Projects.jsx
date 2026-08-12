import { useState } from "react"

import sparehub1 from "../assets/projects/sparehub/1.png"


import fivesamath1 from "../assets/projects/fivesamath/1.png"


import nextstep1 from "../assets/projects/nextstep/1.png"


import buseka1 from "../assets/projects/buseka/1.png"
import buseka2 from "../assets/projects/buseka/2.png"
import buseka3 from "../assets/projects/buseka/3.png"

import nexaerp1 from "../assets/projects/nexaerp/1.png"
import nexaerp2 from "../assets/projects/nexaerp/2.png"
import nexaerp3 from "../assets/projects/nexaerp/3.png"

import hirepath1 from "../assets/projects/hirepath/1.png"
import hirepath2 from "../assets/projects/hirepath/2.png"
import hirepath3 from "../assets/projects/hirepath/3.png"

import library1 from "../assets/projects/library/1.png"
import library2 from "../assets/projects/library/2.png"
import library3 from "../assets/projects/library/3.png"


function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)
  const hasMultipleImages = project.images.length > 1

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const previousImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + project.images.length) % project.images.length
    )
  }

  return (
    <div className="project-card">

      <div className="project-image-wrapper">

        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="project-img"
        />

        {hasMultipleImages && (
          <>
            <button
              className="image-nav prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              className="image-nav next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="image-dots">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={index === currentImage ? "active" : ""}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

      </div>

      <div className="project-content">

        <div className="project-title-row">
          <h3>{project.title}</h3>

          <span className={`project-type ${project.type.toLowerCase()}`}>
            {project.type}
          </span>
        </div>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn live-btn"
            >
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              GitHub
            </a>
          )}

        </div>

      </div>
    </div>
  )
}


function Projects() {

  const projects = [

    {
      title: "Spare Part Shop",

      description:
        "A modern vehicle spare parts e-commerce platform designed to provide customers with an easy and convenient way to browse and purchase automotive spare parts.",

      images: [
        sparehub1,
        
      ],

      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
      ],

      github:
        "https://github.com/chamodyha123/spare-part-shop.git",

      type: "Personal",
    },


    {
      title: "FiveSamath API",

      description:
        "An AI-powered Sinhala learning platform backend developed using ASP.NET and C#, providing APIs for learning content and intelligent educational features.",

      images: [
        fivesamath1,
        
      ],

      tech: [
        "ASP.NET",
        "C#",
        "SQL",
        "AI",
      ],

      github:
        "https://github.com/chamodyha123/FiveSamath.API.git",

      type: "Personal",
    },


    {
      title: "NextStep Platform",

      description:
        "A full-stack university communication and student support platform developed collaboratively to provide services such as lost and found, shuttle information, events, and administrative management.",

      images: [
        nextstep1,
        
      ],

      tech: [
        "React",
        "ASP.NET",
        "JWT",
        "SQL Server",
      ],

      github:
        "https://github.com/dilshan24142/NextStep.git",

      type: "Collaborative",
    },


    {
      title: "Bus Eka",

      description:
        "A smart digital transportation platform for Sri Lankan public bus transportation. Passengers can search trips, reserve seats, receive QR tickets, and track buses while transport staff manage buses, trips, tickets, GPS tracking, and emergencies.",

      images: [
        buseka1,
        buseka2,
        buseka3,
      ],

      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Socket.IO",
      ],

      github:
        "https://github.com/chamodyha123/bus-eka-backend.git",

      live:
        "https://bus-eka-frontend.vercel.app/",

      type: "Personal",
    },


    {
      title: "NexaERP",

      description:
        "A modern enterprise resource planning platform developed collaboratively to manage business operations, resources, users, and organizational processes through a centralized digital system.",

      images: [
        nexaerp1,
        nexaerp2,
        nexaerp3,
      ],

      tech: [
        "React",
        "ASP.NET",
        "C#",
        "SQL Server",
        "JWT",
      ],

      github:
        "https://github.com/chamodyha123/Erp_frontend.git",

      live:
        "https://nexaerp-frontend.vercel.app/",

      type: "Collaborative",
    },


    {
      title: "HirePath",

      description:
        "An AI-powered recruitment and talent management platform developed collaboratively to streamline recruitment processes, candidate management, and hiring activities.",

      images: [
        hirepath1,
        hirepath2,
        hirepath3,
      ],

      tech: [
        "React",
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "AI",
      ],

      github:
        "https://github.com/chamodyha123/HirePath.git",

      type: "Collaborative",
    },


    {
      title: "Library Management System",

      description:
        "A complete library management system developed as a personal project to manage books, users, borrowing, returns, and library operations through a centralized application.",

      images: [
        library1,
        library2,
        library3,
      ],

      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "EF Core",
      ],

      github:
        "https://github.com/chamodyha123/LibrarySolution.git",

      type: "Personal",
    },

  ]


  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <p className="projects-subtitle">
        A collection of personal and collaborative software projects
        developed using modern technologies.
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
          />
        ))}

      </div>

    </section>
  )
}

export default Projects