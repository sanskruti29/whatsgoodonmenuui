import React from "react";
import { LoginButton} from './LoginButton';
import './Styles.css';

export class Header extends React.Component {
  render() {
    return (
        <div className = "HeaderFooterStyle">
          <h1>Whats Good on Menu</h1>
          <LoginButton />
      </div>
    );
  }
}