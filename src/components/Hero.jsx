import profileImage from "../assets/me.jpeg"
import FadeIn from "./FadeIn"
import useTypewriter from "../hooks/useTypewriter"

const roles = [
  "Software Engineering Undergraduate",
  "Full-Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
]

function Hero() {
  const role = useTypewriter(roles)

  const scrollToProjects = () => {
    const section = document.getElementById("projects")

    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <span className="hero-watermark" aria-hidden="true">PORTFOLIO</span>

      <div className="hero-inner">
        <div className="hero-content">
          <FadeIn delay={80}>
            <p className="hero-badge">Software Engineering Undergraduate</p>
          </FadeIn>

          <FadeIn delay={160}>
            <h1 id="hero-name" className="hero-name">
              <span>Chamodyha</span>
              <span className="hero-name-gradient">Peshan</span>
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="hero-typewriter" aria-label={`Role: ${role}`}>
              <span>I&apos;m a </span>
              <strong>{role}</strong>
              <span className="hero-cursor" aria-hidden="true" />
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="hero-slogan">
              <span>Developer by Logic</span>
              <span>Designer by Passion</span>
            </p>
          </FadeIn>

          <FadeIn delay={360}>
            <p className="hero-description">
              I build practical, user-focused digital experiences by combining
              software engineering with thoughtful UI/UX and graphic design.
            </p>
          </FadeIn>

          <FadeIn delay={420}>
            <div className="hero-buttons">
              <button type="button" className="btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>

              <a
                href="/Chamodyha_Peshan_CV.pdf"
                download="Chamodyha_Peshan_CV.pdf"
                className="btn-secondary"
              >
                Download CV
              </a>

              <a href="#contact" className="hero-contact-link">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn from="right" delay={220} className="hero-visual-fade">
          <div className="hero-visual">
            <div className="hero-image-frame" aria-hidden="true" />
            <div className="hero-image-card">
              <img src={profileImage} alt="Chamodyha Peshan" />
            </div>
          </div>
        </FadeIn>
      </div>

      <a className="hero-scroll-indicator" href="#about" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
