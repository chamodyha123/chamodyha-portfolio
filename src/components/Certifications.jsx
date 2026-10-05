import { useEffect, useState } from "react"
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6"
import figmate from "../assets/figmate.jpg"
import pyleague from "../assets/pyleague.jpg"
import techneeDesign from "../assets/technee-design.jpg"
import navodayaIT from "../assets/navodaya-it.jpg"
import pythonBeginners from "../assets/Python.jpg"
import webDesignBeginners from "../assets/web-design.jpg"
import reactSimplelearn from "../assets/reactsimplelearn.jpg"
import ibmWebDevelopment from "../assets/IBMwebdevelopment.jpg"
import agilesimple from "../assets/agilesimple.jpg"
import nodejssimple from "../assets/nodejssimple.jpg"
import FadeIn from "./FadeIn"

const certificates = [
  { id: "01", title: "FigMate UI/UX Workshop 2025", organization: "Association of Computer & Data Science - NSBM", image: figmate },
  { id: "02", title: "Pyleague '25 Python Coding Challenge", organization: "Hands-On Python Coding Challenge", image: pyleague },
  { id: "03", title: "Adobe Photoshop & Illustrator Design Course", organization: "TECHNEE Graphic Designing", image: techneeDesign },
  { id: "04", title: "Certificate in IT (Graphic Designing)", organization: "TECHNEE - Navodaya Higher Education Institute", image: navodayaIT },
  { id: "05", title: "Online Learning Programme in Python for Beginners", organization: "Department of Computer Science & Engineering, University of Moratuwa", image: pythonBeginners },
  { id: "06", title: "Online Learning Programme in Web Design for Beginners", organization: "Department of Information Technology, University of Moratuwa", image: webDesignBeginners },
  { id: "07", title: "ReactJS for Beginners", organization: "Simplilearn SkillUP", image: reactSimplelearn },
  { id: "08", title: "Agile Methodology for Project Management", organization: "Simplilearn SkillUP", image: agilesimple },
  { id: "09", title: "Web Development Fundamentals", organization: "IBM SkillsBuild", image: ibmWebDevelopment },
  { id: "10", title: "Node.js for Beginners", organization: "Simplilearn SkillUP", image: nodejssimple },
]

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    if (!selectedCertificate) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null)
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [selectedCertificate])

  return (
    <section id="certifications" className="certifications" aria-labelledby="certifications-title">
      <div className="certifications-shell">
        <FadeIn>
          <header className="certifications-header">
            <p className="certifications-eyebrow"><span aria-hidden="true" />Certifications</p>
            <div className="certifications-heading-row">
              <h2 id="certifications-title">Continuing to learn, <span>one credential at a time.</span></h2>
              <span className="certifications-count">{certificates.length} Certificates</span>
            </div>
          </header>
        </FadeIn>

        <div className="certifications-container">
          {certificates.map((certificate, index) => (
            <FadeIn delay={Math.min(index * 45, 360)} key={certificate.id}>
              <article className="certificate-card">
                <button
                  type="button"
                  className="certificate-image-wrapper"
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title} certificate`}
                >
                  <img src={certificate.image} alt={certificate.title} className="certificate-img" loading="lazy" />
                  <span className="certificate-view-icon" aria-hidden="true"><FaArrowUpRightFromSquare /></span>
                </button>
                <div className="certificate-content">
                  <span className="certificate-number">{certificate.id}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.organization}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={() => setSelectedCertificate(null)} role="presentation">
          <div
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate viewer"
            >
              <FaXmark />
            </button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="certificate-modal-img" />
            <div className="certificate-modal-caption">
              <span>{selectedCertificate.id}</span>
              <div>
                <h3 id="certificate-modal-title">{selectedCertificate.title}</h3>
                <p>{selectedCertificate.organization}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications
