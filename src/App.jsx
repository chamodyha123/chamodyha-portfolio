import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import InteractiveBackground from "./components/InteractiveBackground"
import FadeIn from "./components/FadeIn"

function App() {
  return (
    <div className="dark-theme">
      <InteractiveBackground />

      <div className="portfolio-content">

      <Navbar />

      <FadeIn delay={0}>
        <Hero />
      </FadeIn>
      <FadeIn from="left" delay={50}>
        <About />
      </FadeIn>
      <FadeIn delay={75}>
        <Skills />
      </FadeIn>
      <FadeIn from="right" delay={50}>
        <Education />
      </FadeIn>
      <FadeIn delay={75}>
        <Certifications />
      </FadeIn>
      <FadeIn from="left" delay={50}>
        <Projects />
      </FadeIn>
      <FadeIn from="right" delay={50}>
        <Contact />
      </FadeIn>
      <Footer />

      </div>
    </div>
  )
}

export default App
