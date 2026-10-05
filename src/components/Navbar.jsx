import { useEffect, useState } from "react"

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const updateNavbar = () => {
      const nextScrolled = window.scrollY > 16
      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled))

      const viewportMarker = window.scrollY + 130
      let currentSection = "home"

      navigationItems.forEach(({ id }) => {
        const section = document.getElementById(id)

        if (section && section.offsetTop <= viewportMarker) currentSection = id
      })

      setActiveSection((current) => (current === currentSection ? current : currentSection))
    }

    updateNavbar()
    window.addEventListener("scroll", updateNavbar, { passive: true })

    return () => window.removeEventListener("scroll", updateNavbar)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isMenuOpen) document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const handleNavigation = (id) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar-inner" aria-label="Primary navigation">
        <a className="navbar-logo" href="#home" onClick={() => handleNavigation("home")}>
          Chamodyha<span aria-hidden="true">.</span>
        </a>

        <button
          type="button"
          className={`navbar-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
          {navigationItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "is-active" : ""}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={() => handleNavigation(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
