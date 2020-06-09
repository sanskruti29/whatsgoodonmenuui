import React from "react";
import Header from './Header';

export default class LoginPage extends React.Component{ 
    constructor(props) {
        super(props);
        //this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
        console.log('Form was submitted');
        event.preventDefault();
        const data = new FormData(event.target);
        for (var [key, value] of data.entries()) {
            console.log(`${key}` , ":" ,`${value}`);
        }
    }

    handleReset = () => {
        this.form.reset() 
    }

    render() {
        return ( 
            <div>
                <Header/> 
                <form method="post" onSubmit={this.handleSubmit} className="alignCenterForm" ref={form => this.form = form} > 
                    <legend> Login </legend>
                    <input className="inputAreaStyle"
                        name="UserName" 
                        type="text"
                        placeholder="Username/Email"
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
                        //onClick={this.handleSubmit} 
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