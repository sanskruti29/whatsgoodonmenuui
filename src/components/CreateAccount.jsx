import React from "react";
import { form } from 'react-advanced-form'
import { input } from 'react-advanced-form-addons'
import Header from './Header';
import './Styles.css';

export default class CreateAccountPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset = () => {
        this.form.reset() // resets "username" field to "admin"
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('Form was submitted');
        event.preventDefault();
    }

    render() {
        return ( 
            <div>
                <Header/> 
                <form method="post" onSubmit={this.handleSubmit} className="alignCenterForm" ref={form => this.form = form} > 
                    <legend> Create Account </legend>
                    <input className="inputAreaStyle"
                        name="FirstName" 
                        type="text"
                        placeholder="First Name"
                    />
                    <br/><br/>
                    <input className="inputAreaStyle"
                        name="LastName" 
                        type="text"
                        placeholder="Last Name"
                    />
                    <br/><br/>
                    <input className="inputAreaStyle"
                        name="Email"
                        type="email"
                        placeholder="Email" 
                    />
                    <br/><br/>
                    <input className="inputAreaStyle"
                        name="password"
                        type="password"
                        placeholder="password" 
                    />
                    <br/><br/>
                    <input 
                        className="submitButton" 
                        onClick={this.handleSubmit} 
                        type="submit"
                        value="Create Account"
                    /> 
                    <input 
                        className="resetButton" 
                        onClick={this.handleReset} 
                        type="reset"
                        value="Reset"
                    />                 
                </form>
            </div> 
        );
    }
}