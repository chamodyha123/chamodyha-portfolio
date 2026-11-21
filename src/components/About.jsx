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
    value: "2024–2028",
    label: "Software Engineering Undergraduate",
    icon: FaGraduationCap,
  },
  {
    index: "02",
    value: "10",
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
                  I am a passionate Software Engineering undergraduate at NSBM Green
                  University with hands-on experience in full-stack development, mobile
                  application development and UI/UX design.
                </p>
              </FadeIn>

              <FadeIn from="left" delay={170}>
                <p>
                  My technical experience includes React, Next.js, ASP.NET Core, Spring
                  Boot, Node.js, Express.js, Laravel, Flutter, Firebase and relational
                  database technologies.
                </p>
              </FadeIn>

              <FadeIn from="left" delay={240}>
                <p>
                  I am continuously improving in software architecture, cloud deployment,
                  API development, authentication, database management and modern frontend
                  technologies while seeking Software Engineering internship opportunities.
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
