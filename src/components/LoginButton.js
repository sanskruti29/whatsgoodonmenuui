import React from 'react';
import './Styles.css';

export class LoginButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return(
            <button className = "LoginButton" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'LogIn' : 'LogOut'}
            </button>
        );
    }
}