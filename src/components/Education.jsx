import { useState } from "react"

function Education() {
  const [showOLResults, setShowOLResults] = useState(false)
  const [showALResults, setShowALResults] = useState(false)

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">

        {/* CURRENT EDUCATION */}
        <div className="education-card">
          <h3>NSBM Green University</h3>

          <h4>
            BSc (Hons) in Software Engineering
          </h4>

          <p>
            Currently pursuing a Bachelor of Science (Honours)
            degree in Software Engineering at NSBM Green University.
            Developing knowledge and practical experience in software
            development, web technologies, databases, software
            engineering, and modern application development.
          </p>

          <div className="education-status">
            <span>Currently Studying</span>
          </div>

          <p className="education-period">
            Expected Graduation: 2028
          </p>
        </div>


        {/* ADVANCED LEVEL */}
        <div className="education-card">
          <h3>R/Eheliyagoda Central College</h3>

          <h4>G.C.E Advanced Level Examination 2022</h4>

          <p>
            Mathematics Stream with Combined Mathematics,
            Physics, Information Technology and English.
          </p>

          <button
            className="result-btn"
            onClick={() => setShowALResults(!showALResults)}
          >
            {showALResults ? "Hide Results" : "View Results"}
          </button>

          {showALResults && (
            <div className="results-box">
              <p>Combined Mathematics — S</p>
              <p>Physics — C</p>
              <p>Information Technology — B</p>
              <p>English — C</p>
            </div>
          )}
        </div>


        {/* ORDINARY LEVEL */}
        <div className="education-card">
          <h3>R/Eheliyagoda Central College</h3>

          <h4>G.C.E Ordinary Level Examination 2019</h4>

          <p>
            Successfully completed the G.C.E O/L Examination
            with strong academic performance.
          </p>

          <button
            className="result-btn"
            onClick={() => setShowOLResults(!showOLResults)}
          >
            {showOLResults ? "Hide Results" : "View Results"}
          </button>

          {showOLResults && (
            <div className="results-box">
              <p>Mathematics — A</p>
              <p>Sinhala — A</p>
              <p>Science — A</p>
              <p>History — A</p>
              <p>English — B</p>
              <p>Geography — A</p>
              <p>Health — A</p>
              <p>Buddhism — A</p>
              <p>Drama — B</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Education