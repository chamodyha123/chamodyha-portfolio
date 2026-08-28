import { useState } from "react"
import figmate from "../assets/figmate.jpg"
import pyleague from "../assets/pyleague.jpg"
import techneeDesign from "../assets/technee-design.jpg"
import navodayaIT from "../assets/navodaya-it.jpg"
import pythonBeginners from "../assets/Python.jpg" 
import webDesignBeginners from "../assets/web-design.jpg" 
// 1. Added import for the new React certificate image
import reactSimplelearn from "../assets/reactsimplelearn.jpg"

function Certifications() {
  // 2. State to track which certificate (if any) is enlarged
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: "01",
      title: "FigMate UI/UX Workshop 2025",
      organization: "Association of Computer & Data Science - NSBM",
      image: figmate
    },
    {
      id: "02",
      title: "Pyleague '25 Python Coding Challenge",
      organization: "Hands-On Python Coding Challenge",
      image: pyleague
    },
    {
      id: "03",
      title: "Adobe Photoshop & Illustrator Design Course",
      organization: "TECHNEE Graphic Designing",
      image: techneeDesign
    },
    {
      id: "04",
      title: "Certificate in IT (Graphic Designing)",
      organization: "TECHNEE - Navodaya Higher Education Institute",
      image: navodayaIT
    },
    {
      id: "05",
      title: "Online Learning Programme in Python for Beginners",
      organization: "Department of Computer Science & Engineering, University of Moratuwa",
      image: pythonBeginners
    },
    {
      id: "06",
      title: "Online Learning Programme in Web Design for Beginners",
      organization: "Department of Information Technology, University of Moratuwa",
      image: webDesignBeginners
    },
    // 3. Added your new ReactJS certificate details here
    {
      id: "07",
      title: "ReactJS for Beginners",
      organization: "Simplilearn SkillUP",
      image: reactSimplelearn
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2>My Certifications</h2>
      <div className="certifications-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <div
              className="certificate-image-wrapper"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-img"
              />
              <div className="certificate-overlay"></div>
            </div>
            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <p>{certificate.organization}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Modal for enlarged certificate view */}
      {selectedCertificate && (
        <div
          className="certificate-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications