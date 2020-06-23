import React from 'react'
import './Styles.css'
import Navbar from 'react-bootstrap/Navbar'
import menu from './images/menu.png'

export default class BrandNameHeader extends React.Component{
    render(){
        return(
            <div  className="container-small">
                <Navbar className= "navBarColorStyle justify-content-center" variant="dark" expand="lg">
                    <Navbar.Brand href="/" className="brandNameFontStyle" >
                        <img
                        alt="logo"
                        src={menu}
                        width="50"
                        height="40"
                        />{' '}
                        Whats Good on Menu
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}