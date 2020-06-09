/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './Styles.css'
import menu from './images/menu.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

export default class Header extends React.Component {
  render(){   
    return(
      <div>
        <Navbar className= "navBarColorStyle" variant="dark" expand="lg">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={menu}
              width="50"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="brandNameFontStyle" >Whats Good on Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link active="false" href="/createAccount">Create Account</Nav.Link>
              <Nav.Link active="true" href="/login">Login</Nav.Link>
              {/* <Nav.Link active="true" href="/practiceForm">Practice Form</Nav.Link> */}
              <Nav.Link active="true" href="/addRestaurant">Add Restaurant</Nav.Link>
              {/* <NavDropdown active="true" title="My settings " id="basic-nav-dropdown">
                <NavDropdown.Item href="#Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#MyReviews">My Reviews</NavDropdown.Item>
                <NavDropdown.Item href="#MyFavRestaurant">My Favorite Restaurants</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search Restaurants" className="mr-sm-2" /> <br/>
              <Button variant="outline-light">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>    
    );    
  }
}


/*
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className='menuStyle' src={menu}/>
        <ul className = "menu-ul">
          <li>
            <Link to="/">Whats Good on Menu</Link>
          </li>
          <li>
            <Link to="/CreateAccount">Create Account</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}*/