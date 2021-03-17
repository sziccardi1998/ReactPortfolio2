import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    message: "",
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.setState({
      firstName: "",
      lastName: "",
      message: "",
    });
  };

  render() {
    return (
      <div class="row">
        <div class="row">
          <p>
            Hi, {this.state.firstName} {this.state.lastName}
          </p>
        </div>
        <div class="row">
          <form
            className="form"
            action="https://formspree.io/f/xvovelpb"
            method="POST"
          >
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
              style={{ margin: 10 }}
            />

            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
              style={{ margin: 10 }}
            />
            <p style={{textAlign: "justify"}}>
              Send me a message!
            </p>

            <textarea
              value={this.state.message}
              name="message"
              onChange={this.handleInputChange}
              type="message"
              placeholder="How can I help you?"
              style={{ margin: 20, height: 300, width: 300 }}
            />
            <button
              onClick={this.handleFormSubmit}
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "block",
              }}
            >
              Submit
            </button>
          </form>

          <p style={{textAlign: "justify"}}>
            All requests will be answered in the order they are received.
        </div>
      </div>
    );
  }
}

export default Form;