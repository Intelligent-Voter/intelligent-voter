import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      address: "",
      zipcode: "",
    };

    this.onAddress = this.onAddress.bind(this);
    this.onZip = this.onZip.bind(this);
    this.onPass = this.onPass.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onPass(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onEmail(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onZip(e) {
    this.setState({
      zipcode: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const signup = {
      username: this.state.username,
      password: this.state.password.toString(),
      address: this.state.address,
      zipcode: this.state.zipcode,
    };

    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
    
    });
    const responseData = response.json();
    console.log('sign up response: ', responseData)
    this.context.router.push({
      pathname: '/mainpage',
      state: responseData
    })

    this.setState({
      username: "",
      password: "",
      address: "",
      zipcode: "",
    });
  }

  render() {
    return (
      <div>
        <h3> Register:</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-label">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form"
              name="email"
              value={this.state.email}
              onChange={this.onEmail}
            />
          </div>

          <div className="form-label">
            <label>Password:</label>
            <input
              type="password"
              required
              className="form"
              name="password"
              value={this.state.password}
              onChange={this.onPass}
            />
          </div>

          <div className="form-label">
            <label>Address:</label>
            <input
              type="text"
              required
              className="form"
              name="address"
              value={this.state.address}
              onChange={this.onAddress}
            />
          </div>

          <div className="form-label">
            <label>Zipcode:</label>
            <input
              type="text"
              required
              className="form"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.onZip}
            />
          </div>

          <div className="form-label">
            <input type="submit" value="Register" className="button" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
