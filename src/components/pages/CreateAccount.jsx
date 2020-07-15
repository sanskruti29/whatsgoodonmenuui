import React from "react";
import './Styles.css';
import {API_ROOT} from '../VisitorInfo/app-config'

export default class CreateAccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            created: false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log("Event", event);
        // const data = new FormData(event.target);
        // console.log("Data", data);
        // for (var [key, value] of data.entries()) {
        //     if (`${key}`==="firstname") {
        //         alert("Thank you for creating account with us, " + value);
        //     }
        //     console.log(`${key}` , ":" ,`${value}`);
        // }

        const formData = new FormData(event.target);
        console.log("Data", formData);
        for (var [key, value] of formData.entries()) {
            if (`${key}`==="firstname") {
                alert("Thank you for creating account with us, " + value);
            }
            console.log(`${key}` , ":" ,`${value}`);
        }

        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        fetch(`${API_ROOT}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(d => console.log("Account created"),
            this.setState((state)=> {
                return {created: true}
            })
        );
    }
    
    handleReset = () => {
        this.form.reset();
    }

    render() {
        if(this.state.created === true){
            return(
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <label>Account Created!</label>
                </div>
            );
        } else {
            return (  
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <form  ref={form => this.form = form} onSubmit={this.handleSubmit} className="form-group"> 
                        <legend> Create Account </legend>
                        <input className="inputAreaStyle "
                            id="firstName"
                            name="firstName" 
                            type="text"
                            placeholder="First Name"
                        />
                        <br/><br/>
                        <input className="inputAreaStyle"
                            id="lastName"
                            name="lastName" 
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
            );
        }
    }
}