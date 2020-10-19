import React from "react"
import './Styles.css'
import menu from './images/menu.png'
import Navbar from 'react-bootstrap/Navbar'
import { Nav} from 'react-bootstrap'

export default class Header extends React.Component {
  render(){   
    return(
      <div  className="container-small">
        <Navbar className= "navBarColorStyle" variant="dark" expand="lg">
          <Navbar.Brand href="https://whatsgoodonmenu.com" className="brandNameFontStyle" >
            <img
              alt="logo"
              src={menu}
              width="50"
              height="40"
            />{' '}
            Whats Good on Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="navOptions">
              <Nav.Link className="link" active="true" href="/signup">Sign Up</Nav.Link> 
              <Nav.Link className="link" active="true" href="/login">Login</Nav.Link>
              <Nav.Link className="link" active="true" href="/rating">Rating</Nav.Link>
              {/* <Nav.Link className="link" active="true" href="/review">Review</Nav.Link> */}
              {/* <Nav.Link active="false" href="/addrestaurant">Add Restaurant</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>    
    );    
  }
}