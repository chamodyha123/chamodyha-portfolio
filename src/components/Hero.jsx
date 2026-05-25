function Hero() {

  const scrollToProjects = () => {
    const section = document.getElementById("projects")

    section.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (

    <section id="home" className="hero">

      {/* LEFT SIDE */}

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Chamodyha Peshan</span>
        </h1>

        <h2>
          Software Engineering Undergraduate
        </h2>

        <p>
          Passionate about Web Development,
          UI/UX Design, Graphic Design,
          and Creative Technologies.
        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={scrollToProjects}
          >
            View Projects
          </button>

          <a
            href="/cv.pdf"
            download
          >
            <button className="btn-secondary">
              Download CV
            </button>
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="tagline-box">

          <h3>
            Designing Experiences.
            <br />
            Engineering Solutions.
          </h3>

          <p>
            Blending Software Engineering
            with Creative Graphic Design
            to build modern digital experiences.
          </p>

        </div>

      </div>

    </section>

  )
}

export default Hero