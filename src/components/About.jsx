import {
  FaCertificate,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa"
import FadeIn from "./FadeIn"

const highlights = [
  {
    index: "01",
    value: "3rd Year",
    label: "Software Engineering Undergraduate",
    icon: FaGraduationCap,
  },
  {
    index: "02",
    value: "8",
    suffix: "+",
    label: "Portfolio Projects",
    icon: FaCode,
  },
  {
    index: "03",
    value: "10",
    suffix: "+",
    label: "Certifications",
    icon: FaCertificate,
  },
  {
    index: "04",
    value: "Full-Stack",
    label: "Development + Design",
    icon: FaLayerGroup,
  },
]

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-layout">
          <div className="about-content">
            <FadeIn from="left">
              <p className="about-eyebrow"><span aria-hidden="true" />About Me</p>
              <h2 id="about-title" className="about-title">
                Building thoughtful software with a <span>designer&apos;s eye.</span>
              </h2>
            </FadeIn>

            <div className="about-copy">
              <FadeIn from="left" delay={100}>
                <p>
                  I am a Software Engineering undergraduate at NSBM Green University,
                  currently in my 3rd Year, 1st Semester. I am a passionate graphic
                  designer and software developer who enjoys building modern web
                  applications and creative digital experiences.
                </p>
              </FadeIn>

              <FadeIn from="left" delay={170}>
                <p>
                  I am interested in frontend development, UI/UX design, React,
                  Next.js, backend development, database management, and modern
                  cloud technologies. I enjoy turning ideas into practical,
                  user-friendly software solutions.
                </p>
              </FadeIn>

              <FadeIn from="left" delay={240}>
                <p>
                  Through personal and collaborative full-stack applications, I have
                  gained hands-on experience with REST APIs, JWT authentication,
                  PostgreSQL, SQL Server, Git/GitHub, Vercel, and Azure while
                  continuously learning and solving technical problems.
                </p>
              </FadeIn>
            </div>

            <FadeIn from="left" delay={310}>
              <a
                href="/Chamodyha_Peshan_CV.pdf"
                download="Chamodyha_Peshan_CV.pdf"
                className="about-cv-button"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </FadeIn>
          </div>

          <FadeIn from="right" delay={140}>
            <dl className="about-stats" aria-label="Portfolio highlights">
              {highlights.map(({ index, value, suffix, label, icon: Icon }) => (
                <div className="about-stat-card" key={index}>
                  <div className="about-stat-top">
                    <span className="about-stat-icon" aria-hidden="true"><Icon /></span>
                    <span className="about-stat-index">{index}</span>
                  </div>
                  <dt>{label}</dt>
                  <dd>
                    {value}{suffix && <sup>{suffix}</sup>}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About
