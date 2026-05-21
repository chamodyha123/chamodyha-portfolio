import figmate from "../assets/figmate.jpg"
import pyleague from "../assets/pyleague.jpg"
import techneeDesign from "../assets/technee-design.jpg"
import navodayaIT from "../assets/navodaya-it.jpg"
import pythonBeginners from "../assets/Python.jpg" 
// 1. Added import for the new Web Design certificate image
import webDesignBeginners from "../assets/web-design.jpg" 

function Certifications() {

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
    // 2. Added your new Web Design certificate details here
    {
      id: "06",
      title: "Online Learning Programme in Web Design for Beginners",
      organization: "Department of Information Technology, University of Moratuwa",
      image: webDesignBeginners
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2>My Certifications</h2>
      <div className="certifications-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <div className="certificate-image-wrapper">
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
    </section>
  )
}

export default Certifications