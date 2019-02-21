import React, { Component } from "react";
import logo from "../../assets/images/slogo.png";
import totallogo from "../../assets/images/totallogo.png";
import PropTypes from "prop-types";
import LogoTheme from './LogoTheme'
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { userService } from '../../_services';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      email: "",
      password: ""
    };
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  // showtextHandler = () => {
  //   const inputType = this.state.type;

  //   if (inputType === "text") {
  //     this.setState({ type: "password" });
  //   } else {
  //     this.setState({ type: "text" });
  //   }
  // };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onLogin = event => {
    event.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(payload);
    var headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    };
    axios
      .post("http://localhost:82/Invoice-App/public/api/user/login", payload, {
        headers: headers
      })
      .then(function(response) {
        console.log();
        // localStorage.setItem("auth-token", response.data.data.token);
        // localStorage.setItem("username", response.data.data.name);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="columns is-marginless ">
         <LogoTheme/>
        <div className="column is-6 paddingless login-block">
          <div className="image-logo">
            <img src={totallogo} alt="logo" width="20" height="20" />
          </div>
          <h4>Welcome Back,</h4>
          <div className="columns">
            <form className="column is-12 is-paddingless">
              <div className="column is-10 ">
                <label>Email</label>
                <input
                  type="email"
                  className="input inputalt"
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div className="column is-10">
                <label>Password</label>
                <input
                  type="password"
                  className="input inputalt"
                  onChange={this.handleChangePassword}
                />
              </div>
              <div className="column is-10 ">
                <button
                  className="button is-primary primarybtn"
                  onClick={this.onLogin}
                >
                  Login
                </button>
                <a className="is-pulled-right has-text-grey-dark">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <div className="column is-10">
            <p className="has-text-centered">
              Your Didn't Register ? -
              <Link to="/registration" className="has-text-grey-dark">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
