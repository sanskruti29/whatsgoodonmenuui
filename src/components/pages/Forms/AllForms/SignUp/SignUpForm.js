import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from '../../FormComponents/TextInput/TextInput';
import { postJson } from '../../FormComponents/postJson'

const schema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short")
    .max(15, "Password is too long!")
    .matches(/[a-z]/, "Password must contain at least one letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
    .required("Required"),
})

const SignUpForm = () => {
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  if (message) {
    return (
      <div className="auth-wrap"><div className="panel form-alert success mb-0" role="status">{message}</div></div>
    )
  }

  return (
    <div className="auth-wrap">
      <div className="panel">
        <h1>Create your account</h1>
        <p className="muted">Join <em>What's Good on Menu</em></p>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting }) => {
            setError(null)
            try {
              const data = await postJson('/users', values)
              setMessage(data.message || 'Account created.')
            } catch (e) {
              setError(e.message === 'Failed to fetch' ? 'Could not reach the server. Please try again.' : e.message)
            }
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              {error && <div className="form-alert" role="alert">{error}</div>}
              <TextInput label="First name" name="firstName" type="text" autoComplete="given-name" />
              <TextInput label="Last name" name="lastName" type="text" autoComplete="family-name" />
              <TextInput label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
              <TextInput label="Password" name="password" type="password" autoComplete="new-password" />
              <p className="muted small">8–15 characters with upper and lower case letters, a digit and one of !@#$%^&*</p>
              <button className="btn-brand w-100" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account…' : 'Sign up'}
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 mb-0 text-center">Have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  )
}

export default SignUpForm
