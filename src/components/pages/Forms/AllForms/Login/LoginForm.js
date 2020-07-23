import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../Styles.css'
import TextInput from '../../FormComponents/TextInput';
import {API_ROOT} from '../../../../VisitorInfo/app-config'

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: null,
      loggedIn: false
    }
  }

  render(){
    if(this.state.loggedIn === true){
      return(
      <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
          <label>You have logged in</label>
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
            .then(d => console.log("Logged In"),
              this.setState((state)=> {
                return {loggedIn: true}
              })
            );
            setSubmitting(false);         
          }} 
        >
        <div className="jumbotron container d-flex justify-content-center formStyle" style={{marginTop: 10}}>
        <p> Sign in to What's Good on Menu </p>
        <p> New to What's Good on Menu? <a href="/signup"> Sign up </a></p>
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
        </Formik>
        </div>
      );
    }
  }
}