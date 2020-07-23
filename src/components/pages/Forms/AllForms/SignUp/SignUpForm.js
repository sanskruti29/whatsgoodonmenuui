import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../Styles.css'
import TextInput from '../../FormComponents/TextInput';
import {API_ROOT} from '../../../../VisitorInfo/app-config'

export default class signUpForm extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      data: null,
      signUp: false
    }
  }

  render(){
    if(this.state.signUp === true){
      return(
        <div className="jumbotron container d-flex justify-content-center" style={{marginTop: 10}}>
          <label>Account has been created!</label>
        </div>
      );
    } else {
      return(
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required("Required"),
              lastName: Yup.string()
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(15, "Password is too long!")
                .matches(/[a-z]/, "Password must contain at least one letter")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[0-9]/, "Password must contain at least one digit")
                .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
                // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Invalid')
                .required("Required"),
            })}
            onSubmit={async(values,{setSubmitting})=>{
              await new Promise(r=>setTimeout(r,500));
              fetch(`${API_ROOT}/users`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values, null, 2)
              })
              .then(d=> console.log("Account created"),
                this.setState((state)=>{
                  return{signUp: true}
                })
              );
              setSubmitting(false);
            }}
          >
          <div className="jumbotron container d-flex justify-content-center formStyle" style={{marginTop: 10}}>
            <h5>Sign Up for What's Good on Menu</h5>
            <Form>
              <TextInput
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <TextInput
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <TextInput
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
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