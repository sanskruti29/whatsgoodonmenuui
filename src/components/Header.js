/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './Styles.css'
import menu from './images/menu.png'
import Navbar from 'react-bootstrap/Navbar'
import { Nav} from 'react-bootstrap';

export default class Header extends React.Component {
  render(){   
    return(
      <div>
        <Navbar className= "navBarColorStyle" variant="dark" expand="lg">
          <Navbar.Brand href="/" className="brandNameFontStyle" >
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
              <Nav.Link active="false" href="/createAccount">Create Account</Nav.Link> 
              <Nav.Link active="false" href="/login">Login</Nav.Link>
              <Nav.Link active="false" href="/addRestaurant">Add Restaurant</Nav.Link>
            </Nav>
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