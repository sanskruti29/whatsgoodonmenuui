import React from "react"
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import menu from './images/menu.png'

const Header = () => (
  <header>
    <Navbar className="site-nav" variant="dark" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="" src={menu} />
          What's Good on Menu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav as="ul" className="align-items-md-center">
            <Nav.Item as="li"><Nav.Link as={NavLink} to="/" end>Home</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link as={NavLink} to="/addrestaurant">Add a restaurant</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link as={NavLink} to="/aboutus">About</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link as={NavLink} to="/login">Log in</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link as={NavLink} to="/signup" className="nav-cta">Sign up</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
