/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Styles.css';
import { Link } from 'react-router-dom';
import menu from './images/menu.png';
import logo from './images/logo.png';

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
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}
/* "https://image.freepik.com/free-icon/facebook-circular-logo_318-40188.jpg"> 


className="header"

<ul className="website-ul">
          <li>
          Whats Good on Menu
          </li>
        </ul>

*/