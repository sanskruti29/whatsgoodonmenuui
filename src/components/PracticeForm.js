import React from "react";
import { form } from 'react-advanced-form'
import { input } from 'react-advanced-form-addons'
import Header from './Header';
import './Styles.css';

export default class PracticeForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
      
        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });

        for (var [key, value] of data.entries()) {
            console.log(`${key}` , ":" ,`${value}`);
        }
    }
  
    render() {
        return (
            <div>
                <Header/>
                <form className="alignCenterForm" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" />
                <br/><br/>
                <label htmlFor="email">Enter your email</label>
                <input id="email" name="email" type="email" />
                <br/><br/>
                <label htmlFor="birthdate">Enter your birth date</label>
                <input id="birthdate" name="birthdate" type="text" />
                <br/><br/>
                <button>Send data!</button>
                </form>
            </div>
        );
    }
  }