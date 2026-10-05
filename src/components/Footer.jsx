import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/chamodyha123", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chamodyha-peshan-754652216/", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/chamoth.peshan.7", icon: FaFacebookF },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-identity">
          <a href="#home" className="footer-name">Chamodyha Peshan<span aria-hidden="true">.</span></a>
          <p>Developer by Logic, Designer by Passion.</p>
        </div>

        <div className="footer-links">
          <a href="mailto:peshanchamoth759@gmail.com" className="footer-email"><MdEmail aria-hidden="true" />Email</a>
          <a href="/Chamodyha_Peshan_CV.pdf" download="Chamodyha_Peshan_CV.pdf">Download CV</a>
        </div>

        <div className="footer-icons" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        <p className="copyright">© 2026 Chamodyha Peshan <span aria-hidden="true">·</span> Built with React</p>
      </div>
    </footer>
  )
}

export default Footer
