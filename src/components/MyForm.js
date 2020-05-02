import React from 'react'
import { Form } from 'react-advanced-form'
import { Input } from 'react-advanced-form-addons'
import './Styles.css';

export class MyForm extends React.Component {
  handleButtonClick = () => {
    this.form.reset() // resets "username" field to "admin"
  }

  render() {
    return (
      <Form ref={form => this.form = form}>
        <Input
          name="username"
          placeholder="username" />
        <Input
        name="password"
        placeholder="password" type="password"/>
        <button class="resetButton" onClick={this.handleButtonClick}>Reset</button>
      </Form>
    )
  }
}