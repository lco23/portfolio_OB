import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './Contact.css'


export default class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'olivierbaveux@hotmail.com',
      message_html: message,
    }
    emailjs.send(
      'gmail',
      'template_xr0HRZ81',
      templateParams,
      'user_Y293YNo1nIqjKIU5h2c7b'
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <section id="contact">
        <div className="rowSection-head">
          <div className="tenColumns">
            <p className="lead">
              Contact
              </p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
              <textarea
                name="message"
                className="text-primary"
                placeholder="Write your message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
              <button name="Send">Send</button>
            </form>
          </div>
        </div>


      </section>
    );
  }
}
