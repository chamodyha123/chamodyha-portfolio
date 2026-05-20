function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
          />
        </div>

        <div className="about-right">

          <h2>About Me</h2>

          <p>
            I am a Software Engineering undergraduate at NSBM
            and a passionate graphic designer who enjoys building
            modern web applications and creative digital experiences.
          </p>

          <p>
            I am interested in frontend development, UI/UX design,
            React development, and modern web technologies.
          </p>

          <div className="about-info">

            <div>
              <h3>Education</h3>
              <p>NSBM Green University</p>
            </div>

            <div>
              <h3>Experience</h3>
              <p>Frontend & Graphic Design Projects</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About