import React from 'react';
import { Form } from 'react-advanced-form'
import { input } from 'react-advanced-form-addons'
import './Styles.css';
import Header from './Header';

export default class AddRestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleReset = () => {
        this.form.reset() // resets "username" field to "admin"
    }
       
    handleSubmit =(event) => {
        console.log('Form was submitted');
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <Header/>
                <Form method="post" onSubmit={this.handleSubmit} className="alignCenterForm" ref={form => this.form = form}>
                <legend> Add Restaurant </legend>
                <input // Restaurant name
                    name="RestaurantName" 
                    placeholder="Restaurant Name"
                    type="text"
                />
                <br/><br/>
                <input // Address
                    name="Address"
                    placeholder="Address" 
                    type="text"
                />
                <br/><br/>
                <input // Cuisine
                    name="Cuisine"
                    placeholder="Cuisine" 
                    type="text"
                />
                <br/><br/>
                <label>
                    From:
                    {" "}
                    <input // Hours
                        name="Hours"
                        placeholder="Hours" 
                        type="time"
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
                />
                </label>            
                <br/><br/>
                <input // Owner Name
                    name="Owner Name"
                    placeholder="Owner Name" 
                    type="text"
                />
                <br/><br/>
                <input // Phone
                    name="Phone Number"
                    placeholder="Phone Number" 
                    type="number"
                />
                <br/><br/>
                <input // Email
                    name="Email"
                    placeholder="Email" 
                    type="email"
                />
                <br/><br/>
                <input // Website
                    name="Website"
                    placeholder="Website" 
                    type="text"
                />
                <br/><br/>
                <input 
                    className="submitButton" 
                    type="submit"
                    onClick={this.handleSubmit} 
                    value="Submit"
                /> 
                <input 
                    className="resetButton" 
                    type="reset"
                    onClick={this.handleReset} 
                    value="Reset"
                />
                </Form>
            </div>           
        )
    }
}