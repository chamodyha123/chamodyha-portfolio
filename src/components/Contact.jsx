import { useRef } from "react"
import emailjs from "@emailjs/browser"

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"

import {
  MdEmail,
  MdLocationOn
} from "react-icons/md"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_my0b6zf",
        "template_r31gl9a",
        form.current,
        "X_06iX_Nsw5Eilf5P"
      )

      .then(
        () => {
          alert("Message sent successfully!")
        },

        () => {
          alert("Failed to send message.")
        }
      )

    e.target.reset()
  }

  return (
   <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-left">

          <h3>Let's Work Together</h3>

          <p>
            Feel free to contact me for internships,
            collaborations, frontend development,
            UI/UX design, or graphic design projects.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <MdEmail />
              <span>
                peshanchamoth759@gmail.com
              </span>
            </div>

            <div className="contact-item">
              <FaWhatsapp />
              <span>
                0761167038
              </span>
            </div>

            <div className="contact-item">
              <MdLocationOn />
              <span>
                Avissawella, Sri Lanka
              </span>
            </div>

          </div>

          <div className="social-icons">

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

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact