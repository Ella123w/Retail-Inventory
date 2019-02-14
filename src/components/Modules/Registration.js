import React, { Component } from "react";
import logo from "../../assets/images/slogo.png";
import totallogo from "../../assets/images/totallogo.png";
import PropTypes from "prop-types";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Registration extends Component {
  constructor(props) {
    super(props);
  }

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
          <h3 className="is-size-3">Register To Make Business Smarter</h3>
          <div className="">
            <form className="login-form" onSubmit={this.registation}>
              <div className="columns">
                <div className="column is-5">
                  <label>First Name</label>
                  <input className="input inputalt" />
                </div>
                <div className="column is-5">
                  <label>Second Name</label>
                  <input className="input inputalt" />
                </div>
              </div>
              <div className="columns">
                <div className="column is-5">
                  <label>Email</label>
                  <input className="input inputalt" />
                </div>
                <div className="column is-5">
                  <label>Conform your Email</label>
                  <input className="input inputalt" />
                </div>
              </div>
              <div className="columns">
                <div className="column is-5">
                  <label>Password</label>
                  <input className="input inputalt" />
                </div>
                <div className="column is-5">
                  <label>Conform your Password</label>
                  <input className="input inputalt" />
                </div>
              </div>
              <div class="columns">
                <div className="column is-5">
                  <label>Select the Country</label>
                  <select class="input inputalt" />
                </div>
                <div className="column is-5">
                  <label>Select the State</label>
                  <select class="input inputalt" />
                </div>
              </div>
              <div class="columns">
                <div className="column is-5">
                  <label>PinCode</label>
                  <input className="input inputalt" />
                </div>
                <div className="column is-5">
                  <label>Phone Number</label>
                  <input className="input inputalt" />
                </div>
              </div>
              <div class="columns">
                <div className="column is-10">
                  <div className="column is-10">
                    <label>Address</label>
                    <textarea className="input inputalt" />
                  </div>
                </div>
                <button type="submit" className="button is-primary login-btn">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
