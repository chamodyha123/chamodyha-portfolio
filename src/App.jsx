import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>

      <Navbar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />

      <Hero />
      <About />
      <Skills />
      <Education />
     <Certifications />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App