import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import FadeIn from "./FadeIn"

const contactDetails = [
  { icon: MdEmail, label: "Email", value: "peshanchamoth759@gmail.com" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "0761167038" },
  { icon: MdLocationOn, label: "Location", value: "Avissawella, Sri Lanka" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/chamodyha123", icon: FaGithub },
  { label: "Facebook", href: "https://www.facebook.com/chamoth.peshan.7", icon: FaFacebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chamodyha-peshan-754652216/", icon: FaLinkedin },
]

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState("idle")

  const sendEmail = async (event) => {
    event.preventDefault()
    setStatus("sending")

    try {
      await emailjs.sendForm(
        "service_my0b6zf",
        "template_r31gl9a",
        form.current,
        "X_06iX_Nsw5Eilf5P"
      )

      form.current.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-layout">
          <div className="contact-left">
            <FadeIn from="left">
              <p className="contact-eyebrow"><span aria-hidden="true" />Let&apos;s Connect</p>
              <h2 id="contact-title">Let&apos;s create something <span>meaningful.</span></h2>
              <p className="contact-intro">
                I&apos;m open to internships, collaborations, frontend development,
                UI/UX design, and graphic design projects. Reach out and let&apos;s
                explore what we can build together.
              </p>
            </FadeIn>

            <FadeIn from="left" delay={110}>
              <div className="contact-details">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div className="contact-item" key={label}>
                    <span className="contact-detail-icon" aria-hidden="true"><Icon /></span>
                    <span>
                      <small>{label}</small>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn from="left" delay={180}>
              <div className="contact-socials">
                <p>Find me on</p>
                <div className="social-icons">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn from="right" delay={160}>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="contact-form-heading">
                <h3>Send a message</h3>
                <p>I&apos;ll get back to you as soon as I can.</p>
              </div>

              <label>
                Your name
                <input type="text" name="from_name" placeholder="Your name" required />
              </label>

              <label>
                Email address
                <input type="email" name="from_email" placeholder="you@example.com" required />
              </label>

              <label>
                Message
                <textarea name="message" placeholder="Tell me a little about your project..." rows="6" required />
              </label>

              {status === "success" && <p className="contact-status is-success" role="status">Message sent successfully. Thank you for reaching out.</p>}
              {status === "error" && <p className="contact-status is-error" role="alert">Something went wrong. Please try again.</p>}

              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending message..." : "Send Message"}
                {status !== "sending" && <span aria-hidden="true">→</span>}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact
