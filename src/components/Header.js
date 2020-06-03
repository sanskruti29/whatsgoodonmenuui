/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Styles.css';
import { NavLink } from 'react-router-dom';
import menu from './images/menu.png';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className='menuStyle' src={menu}/>
        <ul className = "menu-ul">
          <li>
            <NavLink to="/">Whats Good on Menu</NavLink>
          </li>
          <li>
            <NavLink to="/CreateAccount">Create Account</NavLink>
          </li>
          <li>
            <NavLink to='/Login'>Login</NavLink>
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