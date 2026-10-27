import React from "react"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import VisitorStats from '../../VisitorInfo/VisitorStats'

const external = { target: "_blank", rel: "noopener noreferrer" }

const Footer = () => (
  <footer className="site-footer">
    <Container className="text-center">
      <nav className="footer-links" aria-label="Footer">
        <Link to="/aboutus">About us</Link>
        <a href="https://www.linkedin.com/in/sanskruti-kolpe/" {...external}><FaLinkedin aria-hidden="true"/> LinkedIn</a>
        <a href="https://github.com/sanskruti29" {...external}><FaGithub aria-hidden="true"/> GitHub</a>
        <a href="https://twitter.com/CultureCoder" {...external}><FaTwitter aria-hidden="true"/> Twitter</a>
      </nav>
      <p className="mb-0">&copy; {new Date().getFullYear()} What's Good on Menu. Built by Sanskruti Kolpe.</p>
      <VisitorStats/>
    </Container>
  </footer>
)

export default Footer
