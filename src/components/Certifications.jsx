function Certifications() {

  const certificates = [

    {
      title: "Graphic Design Certification",
      organization: "Add Institute Name"
    },

    {
      title: "Web Development Certification",
      organization: "Add Institute Name"
    },

    {
      title: "UI/UX Design Certification",
      organization: "Add Institute Name"
    },

    {
      title: "Database Management Systems",
      organization: "Add Institute Name"
    }

  ]

  return (
    <section id="certifications" className="certifications">

      <h2>Certifications</h2>

      <div className="certifications-container">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <h3>{certificate.title}</h3>

            <p>{certificate.organization}</p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Certifications