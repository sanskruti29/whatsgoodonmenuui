import React from "react";
import {API_ROOT} from '../../VisitorInfo/app-config'

export default class LoginPage extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loggedIn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(d => console.log("Logged In"),
            this.setState((state)=> {
                return {loggedIn: true}
            })
        );
    }

    handleReset = () => {
        this.form.reset()
    }

    render() {
        if(this.state.loggedIn === true){
            return(
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <label>You have logged in</label>
                </div>
            );
        } else {
            return ( 
                <div>
                    <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                        <form method="post" onSubmit={this.handleSubmit} ref={form => this.form = form} > 
                            <legend> Login </legend>
                            <input className="inputAreaStyle"
                                name="email"
                                id="email" 
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <br/><br/>
                            <input className="inputAreaStyle"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="password" 
                                required
                            />
                            <br/><br/>
                            <div className="buttonSpace" >
                                <input 
                                    className="submitButton"
                                    type="submit"
                                    value="LogIn"
                                /> 
                                <input 
                                    className="resetButton" 
                                    onClick={this.handleReset} 
                                    type="reset"
                                    value="Reset"
                                />  
                            </div>               
                        </form>
                    </div>
                </div> 
            );
        }
    }
}

// Sign in to Yelp
// New to Yelp? Sign up

// By logging in, you agree to Yelp’s Terms of Service and Privacy Policy.