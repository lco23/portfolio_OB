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
    <p className="paragrapheContact">
        <div className="titreContact">
            <p>Contact</p>
        </div>
      <section id="contact">
        <div className="rowSection-head">
                
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Nom"
              />
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email"
              />
              <textarea
                name="message"
                className="text-primary"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
              <button className="send">Send</button>
            </form>
        </div>


      </section>
    </p>
    );
  }
}
