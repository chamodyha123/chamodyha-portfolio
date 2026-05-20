function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar">

      <div className="logo">
        Chamodyha
      </div>

      <ul className="nav-links">

  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#skills">Skills</a>
  </li>

  <li>
  <a href="#education">Education</a>
</li>

<li>
  <a href="#certifications">Certificates</a>
</li>

  <li>
    <a href="#projects">Projects</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>

</ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "Light" : "Dark"}
      </button>

    </nav>
  )
}

export default Navbar