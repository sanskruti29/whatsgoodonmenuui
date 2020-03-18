import React from "react";
import './Styles.css';

export class Navigation extends React.Component{
    render(){
        return(
            <div className="NavStyle">
                <p> Find Restaurant</p>
                <p> Create account </p>
                <p> Login In</p>
            </div>
        );
    }
}
