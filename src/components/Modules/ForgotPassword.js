import React, { Component } from "react";
import logo from "../../assets/images/slogo.png";
import totallogo from "../../assets/images/totallogo.png";
import PropTypes from "prop-types";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  render() {
    return (
      <div className="columns is-marginless">
        <div className="column is-6  is-hidden-mobile logo-block full-height">
          <div className="has-text-centered leftbar-content">
            <div className="image-logo has-text-centered">
              <img src={logo} alt="Total-logo" title="Total-logo" />
              <h6> Welcome to </h6> <h3> TOTAL </h3>
            </div>
            <div />
          </div>
        </div>
        <div className="column is-6 paddingless login-block">
          <div className="image-logo">
            <img src={totallogo} alt="logo" width="20" height="20" />
          </div>
          <h4> Welcome Back, </h4>
          <div className="">
            <form>
              <div className="column is-10">
                <label> Email </label>
                <input
                  type="email"
                  className="input"
                  onChange={this.handleChangeEmail}
                />
                <div className="column is-10">
                  <button className="button is-primary" onClick={this.onLogin}>
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
