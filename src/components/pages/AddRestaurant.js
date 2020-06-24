import React from 'react';
import { input } from 'react-advanced-form-addons'
import './Styles.css';

export default class AddRestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
   
    handleSubmit =(event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        for (var [key, value] of data.entries()) {
            if (`${key}`==="RestaurantName") {
                alert("You will be notified once your restaurant is added, " + value);
            }
            console.log(`${key}` , ":" ,`${value}`);
        }
         // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });
    }

    handleReset = () => {
        this.form.reset() // resets "username" field to "admin"
    }
    
    render() {
        return (
            <div>
                <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
                    <form method="post" onSubmit={this.handleSubmit}  ref={form => this.form = form}>
                    <legend> Add Restaurant </legend>
                    <input // Restaurant name
                        name="RestaurantName" 
                        placeholder="Restaurant Name"
                        type="text"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <input // Address
                        name="Address"
                        placeholder="Address" 
                        type="text"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <input // Cuisine
                        name="Cuisine"
                        placeholder="Cuisine" 
                        type="text"
                        className="inputAreaStyle"
                    />
                    {/* <br/><br/>
                    <label>
                        From:
                        {" "}
                        <input // Hours
                            name="Hours"
                            placeholder="Hours" 
                            type="time"
                            className="inputAreaStyle"
                        /> 
                    </label>
                    <br/><br/>
                    <label>
                        To:
                        {" "}
                        <input // Hours
                        name="Hours"
                        placeholder="Hours" 
                        type="time"
                        className="inputAreaStyle"
                    />
                    </label>             */}
                    <br/><br/>
                    <input // Owner Name
                        name="Owner Name"
                        placeholder="Owner Name" 
                        type="text"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <input // Phone
                        name="Phone Number"
                        placeholder="Phone Number" 
                        type="number"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <input // Email
                        name="Email"
                        placeholder="Email" 
                        type="email"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <input // Website
                        name="Website"
                        placeholder="Website" 
                        type="text"
                        className="inputAreaStyle"
                    />
                    <br/><br/>
                    <div className="buttonSpace" >
                        <button 
                            className="submitButton" 
                            type="submit"
                            value="Submit"
                        > Submit
                        </button>
                        <button 
                            // className=" btn btn-outline-danger" 
                            className="resetButton"
                            type="reset"
                            onClick={this.handleReset} 
                            value="Reset"
                        > Reset
                        </button>
                    </div>
                    </form>
                </div>
            </div>           
        )
    }
}