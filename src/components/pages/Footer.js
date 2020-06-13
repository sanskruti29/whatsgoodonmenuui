import React from "react";
import './Styles.css';
import { Nav} from 'react-bootstrap';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="FooterStyle"> 
                <Nav className="navOptions jumbotron-fluid container justify-content-center">
                    <Nav.Link active="false" href="/aboutUs" style={{color:"white"}}>About us</Nav.Link> 
                </Nav>
            </div>
        );
    }
}