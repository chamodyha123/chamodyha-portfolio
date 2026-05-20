import { useState } from "react"

function Education() {

  const [showOLResults, setShowOLResults] = useState(false)
  const [showALResults, setShowALResults] = useState(false)

  return (
    <section id="education" className="education">

      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">

          <h3>R/Eheliyagoda Central College</h3>

          <h4>G.C.E Ordinary Level Examination 2019</h4>

          <p>
            Successfully completed G.C.E O/L Examination
            with excellent academic performance.
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

      </div>

    </section>
  )
}

export default Education