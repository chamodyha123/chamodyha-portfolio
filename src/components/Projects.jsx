import { useEffect, useState } from "react"

import sparehub1 from "../assets/projects/sparehub/1.png"

// FiveSamath Screenshots
import fivesamath1 from "../assets/projects/fivesamath/1.jpg"
import fivesamath2 from "../assets/projects/fivesamath/2.jpg"
import fivesamath3 from "../assets/projects/fivesamath/3.jpg"
import fivesamath4 from "../assets/projects/fivesamath/4.jpg"
import fivesamath5 from "../assets/projects/fivesamath/5.jpg"
import fivesamath6 from "../assets/projects/fivesamath/6.jpg"
import fivesamath7 from "../assets/projects/fivesamath/7.jpg"
import fivesamath8 from "../assets/projects/fivesamath/8.jpg"
import fivesamath9 from "../assets/projects/fivesamath/9.jpg"
import fivesamath10 from "../assets/projects/fivesamath/10.jpg"
import fivesamath11 from "../assets/projects/fivesamath/11.jpg"

// NextStep
import nextstep1 from "../assets/projects/nextstep/1.png"

// Bus Eka
import buseka1 from "../assets/projects/buseka/1.png"
import buseka2 from "../assets/projects/buseka/2.png"
import buseka3 from "../assets/projects/buseka/3.png"

// NexaERP
import nexaerp1 from "../assets/projects/nexaerp/1.png"
import nexaerp2 from "../assets/projects/nexaerp/2.png"
import nexaerp3 from "../assets/projects/nexaerp/3.png"

// HirePath
import hirepath1 from "../assets/projects/hirepath/1.png"
import hirepath2 from "../assets/projects/hirepath/2.png"
import hirepath3 from "../assets/projects/hirepath/3.png"

// Library Management System
import library1 from "../assets/projects/library/1.png"
import library2 from "../assets/projects/library/2.png"
import library3 from "../assets/projects/library/3.png"

// NSBM Days
import nsbm1 from "../assets/projects/nsbmdays/1.jpg"
import nsbm2 from "../assets/projects/nsbmdays/2.jpg"
import nsbm3 from "../assets/projects/nsbmdays/3.jpg"
import nsbm4 from "../assets/projects/nsbmdays/4.jpg"


function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)

  const images = project.images || []
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    if (!hasMultipleImages) return
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    if (!hasMultipleImages) return
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    )
  }

  const goToImage = (index) => {
    setCurrentImage(index)
  }

  const openModal = () => {
    if (images.length === 0) return
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null || !hasMultipleImages) return

    const touchEndX = event.changedTouches[0].clientX
    const swipeDistance = touchStartX - touchEndX

    if (Math.abs(swipeDistance) > 45) {
      if (swipeDistance > 0) {
        nextImage()
      } else {
        previousImage()
      }
    }

    setTouchStartX(null)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return

      if (event.key === "Escape") {
        closeModal()
      } else if (event.key === "ArrowRight") {
        nextImage()
      } else if (event.key === "ArrowLeft") {
        previousImage()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isModalOpen, images.length])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isModalOpen])

  return (
    <>
      <article className="project-card">
        <div
          className="project-image-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="project-image"
                onClick={openModal}
                loading="lazy"
                draggable="false"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className="project-image-button project-image-button-left"
                    onClick={(event) => {
                      event.stopPropagation()
                      previousImage()
                    }}
                    aria-label={`Previous ${project.title} image`}
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="project-image-button project-image-button-right"
                    onClick={(event) => {
                      event.stopPropagation()
                      nextImage()
                    }}
                    aria-label={`Next ${project.title} image`}
                  >
                    ›
                  </button>

                  <div className="project-image-dots">
                    {images.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        className={`project-image-dot ${
                          index === currentImage ? "active" : ""
                        }`}
                        onClick={(event) => {
                          event.stopPropagation()
                          goToImage(index)
                        }}
                        aria-label={`Show ${project.title} image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="project-image-counter">
                    {currentImage + 1} / {images.length}
                  </div>
                </>
              )}

              <button
                type="button"
                className="project-image-expand"
                onClick={(event) => {
                  event.stopPropagation()
                  openModal()
                }}
                aria-label={`Open ${project.title} image fullscreen`}
                title="View fullscreen"
              >
                ⛶
              </button>
            </>
          ) : (
            <div className="project-image-placeholder">
              No Image Available
            </div>
          )}
        </div>

        <div className="project-content">
          <div className="project-category">
            {project.category}
          </div>

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

          {project.technologies && (
            <div className="project-technologies">
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="project-tech"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          <div className="project-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-live-link"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-github-link"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            )}

            {project.githubRepos &&
              project.githubRepos.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-github-link"
                >
                  <span>{repo.name}</span>
                  <span>↗</span>
                </a>
              ))}
          </div>
        </div>
      </article>

      {isModalOpen && images.length > 0 && (
        <div
          className="project-image-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image viewer`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close image viewer"
            >
              ×
            </button>

            {hasMultipleImages && (
              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            <img
              src={images[currentImage]}
              alt={`${project.title} fullscreen screenshot ${
                currentImage + 1
              }`}
              className="project-modal-image"
              draggable="false"
            />

            {hasMultipleImages && (
              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-right"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <div className="project-modal-bottom">
              <div className="project-modal-title">
                {project.title}
              </div>

              {hasMultipleImages && (
                <>
                  <div className="project-modal-dots">
                    {images.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        className={`project-modal-dot ${
                          index === currentImage ? "active" : ""
                        }`}
                        onClick={() => goToImage(index)}
                        aria-label={`Show fullscreen image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="project-modal-counter">
                    {currentImage + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    title: "Spare Part Shop",

    category: "Web Development",

    description:
      "A responsive spare parts shopping website designed to provide users with a simple and convenient way to browse and explore vehicle spare parts.",

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    images: [
      sparehub1,
    ],

    github:
      "https://github.com/chamodyha123/spare-part-shop.git",

    type: "Personal",
  },


  {
    title: "FiveSamath",

    category: "Full-Stack / Educational Platform",

    description:
      "An educational learning platform designed for Grade 5 scholarship students. The system provides learning materials, videos, quizzes, leaderboard functionality and an AI-powered tutor to support students.",

    technologies: [
      "React",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "AI",
    ],

    images: [
      fivesamath1,
      fivesamath2,
      fivesamath3,
      fivesamath4,
      fivesamath5,
      fivesamath6,
      fivesamath7,
      fivesamath8,
      fivesamath9,
      fivesamath10,
      fivesamath11,
    ],

    live:
      "https://fivesamath-api-frontend.sudeesharavisara2.workers.dev/",

    githubRepos: [
      {
        name: "Backend",
        url:
          "https://github.com/chamodyha123/FiveSamath.API.git",
      },
      {
        name: "Frontend",
        url:
          "https://github.com/sudeesharavisara2-sys/FiveSamath.API-Frontend.git",
      },
    ],

    type: "Personal",
  },


  {
    title: "NextStep Platform",

    category: "Full-Stack Web Application",

    description:
      "A collaborative full-stack platform developed using React and ASP.NET. The system includes JWT authentication, SQL Server integration and modern web application architecture.",

    technologies: [
      "React",
      "ASP.NET",
      "JWT",
      "SQL Server",
    ],

    images: [
      nextstep1,
    ],

    github:
      "https://github.com/dilshan24142/NextStep.git",

    type: "Collaborative",
  },


  {
    title: "Bus Eka",

    category: "Full-Stack / Transportation",

    description:
      "A Sri Lankan bus tracking and reservation platform designed to help passengers track buses, view trips, reserve seats and receive real-time transportation information.",

    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
    ],

    images: [
      buseka1,
      buseka2,
      buseka3,
    ],

    live:
      "https://bus-eka-frontend.vercel.app/",

    github:
      "https://github.com/chamodyha123/bus-eka-backend.git",

    type: "Personal",
  },


  {
    title: "NexaERP",

    category: "Enterprise Resource Planning",

    description:
      "A collaborative ERP platform designed to manage business operations through a modern web application architecture with authentication, database integration and enterprise modules.",

    technologies: [
      "React",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JWT",
    ],

    images: [
      nexaerp1,
      nexaerp2,
      nexaerp3,
    ],

    live:
      "https://nexaerp-frontend.vercel.app/",

    github:
      "https://github.com/chamodyha123/Erp_frontend.git",

    type: "Collaborative",
  },


  {
    title: "HirePath",

    category: "AI / Recruitment Platform",

    description:
      "An AI-powered recruitment and applicant tracking platform designed to support candidates, recruiters and hiring managers. The system includes authentication, role-based access and AI-assisted CV analysis.",

    technologies: [
      "React",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "AI",
    ],

    images: [
      hirepath1,
      hirepath2,
      hirepath3,
    ],

    github:
      "https://github.com/chamodyha123/HirePath.git",

    type: "Collaborative",
  },


  {
    title: "Library Management System",

    category: "Software Development",

    description:
      "A library management application built to manage books, users and library operations using a structured backend architecture and relational database.",

    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "Entity Framework Core",
    ],

    images: [
      library1,
      library2,
      library3,
    ],

    github:
      "https://github.com/chamodyha123/LibrarySolution.git",

    type: "Personal",
  },


  {
    title: "NSBM Days",

    category: "UI/UX Design",

    description:
      "A UI/UX design project focused on creating an inclusive and user-friendly mobile experience for NSBM Days. The project includes user interface design, interaction flows and high-fidelity prototyping.",

    technologies: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
    ],

    images: [
      nsbm1,
      nsbm2,
      nsbm3,
      nsbm4,
    ],

    live:
      "https://www.figma.com/proto/2jPpx0t81FkPxJIXhMVcUJ/NSBMDAYS-UI?node-id=296-32&t=Hz2eiAu2xcEr1AXf-1",

    type: "Design",
  },

]


/* =========================================================
   PROJECTS SECTION
========================================================= */

function Projects() {

  return (
    <section
      id="projects"
      className="projects"
    >

      <div className="projects-header">
<h2>
          My Projects
        </h2>

        <p className="projects-subtitle">
          A collection of software engineering, full-stack
          development, AI, database and UI/UX projects.
        </p>

      </div>


      <div className="projects-container">

        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
          />
        ))}

      </div>

    </section>
  )
}


export default Projects