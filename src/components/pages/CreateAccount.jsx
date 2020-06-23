import React from "react";
import { form } from 'react-advanced-form'
import { input } from 'react-advanced-form-addons'
import Header from './Header';
import './Styles.css';

export default class CreateAccountPage extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Event", event);
        const data = new FormData(event.target);
        console.log("Data", data);
        for (var [key, value] of data.entries()) {
            if (`${key}`==="firstname") {
                alert("Thank you for creating account with us, " + value);
            }
            console.log(`${key}` , ":" ,`${value}`);
        }
    }

    handleReset = () => {
        this.form.reset();
    }

    render() {
        return ( 
            <div>
                <Header/> 
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <form  ref={form => this.form = form} onSubmit={this.handleSubmit} className="form-group"> 
                        <legend> Create Account </legend>
                        <input className="inputAreaStyle "
                            id="firstname"
                            name="firstname" 
                            type="text"
                            placeholder="First Name"
                        />
                        <br/><br/>
                        <input className="inputAreaStyle"
                            id="lastname"
                            name="lastname" 
                            type="text"
                            placeholder="Last Name"
                        />
                        <br/><br/>
                        <input className="inputAreaStyle"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email" 
                        />
                        <br/><br/>
                        <input className="inputAreaStyle"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password" 
                        />
                        <br/><br/>
                        <div className="buttonSpace" >
                            <button 
                                className="submitButton" 
                                // onClick={this.handleSubmit} 
                                type="submit"
                                value="Create Account"
                            > Create Account
                            </button>
                            <button 
                                className="resetButton button1" 
                                onClick={this.handleReset} 
                                type="reset"
                                value="Reset"
                            > Reset
                            </button>  
                        </div>             
                    </form>
                </div>
            </div> 
        );
    }
}