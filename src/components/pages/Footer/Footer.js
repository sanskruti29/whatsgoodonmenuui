import React from "react";
import './Styles.css';
import { Nav} from 'react-bootstrap';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="FooterStyle"> 
                <Nav className=" container justify-content-center">
                    <Nav.Link className="link" active="false" href="/aboutus">About us</Nav.Link> 
                </Nav>

                <div className="row">
                    <p className="col-sm text-white">
                        &copy; {new Date().getFullYear()} What's Good on Menu | All rights reserved 
                    </p>
                </div>
            </div>
        );
    }
}
