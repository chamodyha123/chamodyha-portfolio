import figmate from "../assets/figmate.jpg"
import pyleague from "../assets/pyleague.jpg"
import techneeDesign from "../assets/technee-design.jpg"
import navodayaIT from "../assets/navodaya-it.jpg"

function Certifications() {

  const certificates = [

    {
      id: "01",
      title: "FigMate UI/UX Workshop 2025",
      organization:
        "Association of Computer & Data Science - NSBM",
      image: figmate
    },

    {
      id: "02",
      title: "Pyleague '25 Python Coding Challenge",
      organization:
        "Hands-On Python Coding Challenge",
      image: pyleague
    },

    {
      id: "03",
      title:
        "Adobe Photoshop & Illustrator Design Course",
      organization:
        "TECHNEE Graphic Designing",
      image: techneeDesign
    },

    {
      id: "04",
      title:
        "Certificate in IT (Graphic Designing)",
      organization:
        "TECHNEE - Navodaya Higher Education Institute",
      image: navodayaIT
    }

  ]

  return (

    <section
      id="certifications"
      className="certifications"
    >

      <h2>My Certifications</h2>

      <div className="certifications-container">

        {certificates.map((certificate) => (

          <div
            className="certificate-card"
            key={certificate.id}
          >

            <div className="certificate-image-wrapper">

              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-img"
              />

              <div className="certificate-overlay">

               

              </div>

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