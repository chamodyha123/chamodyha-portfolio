import profileImg from "../assets/me.jpeg"

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <img
            src={profileImg}
            alt="Chamodyha Peshan"
          />
        </div>

        <div className="about-right">

          <h2>About Me</h2>

          <p>
            I am a Software Engineering undergraduate at NSBM Green University
            currently in my 3rd Year, 1st Semester. I am a passionate graphic
            designer and software developer who enjoys building modern web
            applications and creative digital experiences.
          </p>

          <p>
            I am interested in frontend development, UI/UX design, React,
            Next.js, backend development, database management, and modern
            cloud technologies. I enjoy turning ideas into practical,
            user-friendly software solutions.
          </p>

          <div className="about-info">

            <div>
              <h3>Education</h3>
              <p>NSBM Green University</p>
              <p>3rd Year, 1st Semester</p>
              <p>BSc (Hons) in Software Engineering</p>
            </div>

            <div>
              <h3>Experience</h3>

              <p>
                Software Engineering Experience
              </p>

              <p>
                Software Engineering undergraduate with hands-on experience
                developing personal and collaborative full-stack applications.
                Experienced in React, Next.js, ASP.NET Core, Node.js, Express.js,
                REST APIs, JWT authentication, PostgreSQL, SQL Server,
                Git/GitHub, and cloud deployment using Vercel and Azure.
              </p>

              <p>
                I also have practical experience working with
                <strong> PostgreSQL databases hosted on Neon</strong>,
                including database configuration, connection management,
                schema development, and integrating cloud PostgreSQL
                databases with backend applications.
              </p>

              <p>
                I enjoy working on real-world projects, solving technical
                problems, collaborating with developers, and continuously
                learning new technologies.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About