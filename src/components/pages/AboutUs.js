import React from 'react'
import { Container } from 'react-bootstrap'

const AboutUs = () => (
  <Container className="section" style={{ maxWidth: 720 }}>
    <h1>About What's Good on Menu</h1>
    <p className="lead muted">
      An application where users can review each menu item on a restaurant's menu.
    </p>
    <p>
      Restaurant ratings tell you if a place is good. We tell you what to order. Diners rate individual dishes,
      so the next time you sit down you already know the standouts and what to skip.
    </p>
  </Container>
)

export default AboutUs
