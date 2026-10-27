import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from '../../FormComponents/TextInput/TextInput';
import { postJson } from '../../FormComponents/postJson'

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
})

const LoginForm = () => {
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
        <h1>Welcome back</h1>
        <p className="muted">Sign in to <em>What's Good on Menu</em></p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting }) => {
            setError(null)
            try {
              const data = await postJson('/login', values)
              setMessage(data.message || 'Logged in.')
            } catch (e) {
              setError(e.message === 'Failed to fetch' ? 'Could not reach the server. Please try again.' : e.message)
            }
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              {error && <div className="form-alert" role="alert">{error}</div>}
              <TextInput label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
              <TextInput label="Password" name="password" type="password" autoComplete="current-password" />
              <button className="btn-brand w-100" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Log in'}
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 mb-0 text-center">New here? <Link to="/signup">Create an account</Link></p>
      </div>
    </div>
  )
}

export default LoginForm
