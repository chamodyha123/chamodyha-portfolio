import { useState } from "react"
import { FaBookOpen, FaGraduationCap, FaSchool } from "react-icons/fa"
import FadeIn from "./FadeIn"

const educationItems = [
  {
    index: "01",
    icon: FaGraduationCap,
    institution: "NSBM Green University",
    title: "BSc (Hons) in Software Engineering",
    description: "Currently pursuing a Bachelor of Science (Honours) degree in Software Engineering at NSBM Green University. Developing knowledge and practical experience in software development, web technologies, databases, software engineering, and modern application development.",
    badge: "Currently Studying",
    detail: "Expected Graduation: 2028",
  },
  {
    index: "02",
    icon: FaSchool,
    institution: "R/Eheliyagoda Central College",
    title: "G.C.E Advanced Level Examination 2022",
    description: "Mathematics Stream with Combined Mathematics, Physics, Information Technology and English.",
    results: [
      "Combined Mathematics — S",
      "Physics — C",
      "Information Technology — B",
      "English — C",
    ],
  },
  {
    index: "03",
    icon: FaBookOpen,
    institution: "R/Eheliyagoda Central College",
    title: "G.C.E Ordinary Level Examination 2019",
    description: "Successfully completed the G.C.E O/L Examination with strong academic performance.",
    results: [
      "Mathematics — A",
      "Sinhala — A",
      "Science — A",
      "History — A",
      "English — B",
      "Geography — A",
      "Health — A",
      "Buddhism — A",
      "Drama — B",
    ],
  },
]

function Education() {
  const [openResults, setOpenResults] = useState(null)

  const toggleResults = (index) => {
    setOpenResults((current) => (current === index ? null : index))
  }

  return (
    <section id="education" className="education" aria-labelledby="education-title">
      <div className="education-shell">
        <FadeIn>
          <header className="education-header">
            <p className="education-eyebrow"><span aria-hidden="true" />Education</p>
            <h2 id="education-title">Learning the foundations, <span>building what&apos;s next.</span></h2>
          </header>
        </FadeIn>

        <div className="education-timeline">
          {educationItems.map((item, index) => {
            const Icon = item.icon
            const isOpen = openResults === item.index

            return (
              <FadeIn from={index % 2 === 0 ? "left" : "right"} delay={index * 100} key={item.index}>
                <article className="education-card">
                  <div className="education-marker" aria-hidden="true"><Icon /></div>
                  <span className="education-index">{item.index}</span>
                  <div className="education-card-main">
                    <p className="education-institution">{item.institution}</p>
                    <h3>{item.title}</h3>
                    <p className="education-description">{item.description}</p>

                    {item.badge && <span className="education-status">{item.badge}</span>}
                    {item.detail && <p className="education-detail">{item.detail}</p>}

                    {item.results && (
                      <>
                        <button
                          type="button"
                          className="result-btn"
                          aria-expanded={isOpen}
                          aria-controls={`results-${item.index}`}
                          onClick={() => toggleResults(item.index)}
                        >
                          {isOpen ? "Hide Results" : "View Results"}
                          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                        </button>

                        <div
                          id={`results-${item.index}`}
                          className={`results-box ${isOpen ? "is-open" : ""}`}
                        >
                          <div>
                            {item.results.map((result) => <p key={result}>{result}</p>)}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
