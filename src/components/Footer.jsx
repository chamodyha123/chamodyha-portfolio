import {
  FaGithub,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Chamodyha Peshan</h2>

        <p>
          Software Engineering Undergraduate &
          Graphic Designer
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/chamodyha123"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/chamoth.peshan.7"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/chamodyha-peshan-754652216/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="copyright">
          © 2026 Chamodyha Peshan.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer