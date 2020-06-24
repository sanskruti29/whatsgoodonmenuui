import React from "react";

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
            if (`${key}`==="UserName") {
                alert("Welcome " + value);
            }
            console.log(`${key}` , ":" ,`${value}`);  
        } 
    }

    handleReset = () => {
        this.form.reset() 
    }

    render() {
        return ( 
            <div>
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <form method="post" onSubmit={this.handleSubmit} ref={form => this.form = form} > 
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
                        <div className="buttonSpace" >
                            <input 
                                className="submitButton"
                                //onClick={this.handleSubmit} 
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