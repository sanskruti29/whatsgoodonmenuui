import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../Styles.css'
import TextInput from '../../FormComponents/TextInput/TextInput';
import {API_ROOT} from '../../../../VisitorInfo/app-config'

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: null,
      loggedIn: false,
      message : null
    }
  }

  render(){
    if(this.state.loggedIn === true){
      return(
      <div className=" container">
          <label>{this.state.message}</label>
      </div>
      );
    } else {
      return(
        <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));

            fetch(`${API_ROOT}/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(values, null, 2)
            })
            .then(response => response.json())
            .then(parsedData => this.setState({message: parsedData.message, loggedIn: true}));
            setSubmitting(false);         
          }} 
        >
        <div className="formContainer">
        <p> Sign in to <em> What's Good on Menu </em></p>
        <hr/>
        <div className="formStyle">
          <Form>
            <TextInput
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <TextInput 
              name="password"
              type="password"
              placeholder= "Password"
            />
            <button className="buttonStyle" type="submit">Submit</button>
          </Form>
        </div>
        <hr/>
        <p> New to <em>What's Good on Menu?</em> <a href="/signup"> Sign up </a></p>
        </div>
        </Formik>
        </div>
      );
    }
  }
}

