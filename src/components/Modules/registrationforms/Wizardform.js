import React, { Component } from "react";
import logo from "../../../assets/images/slogo.png";
import totallogo from "../../../assets/images/totallogo.png";
import PropTypes from "prop-types";
import axios from "axios";
import UserInfo from "./UserInfo";
import AddressInfo from "./AddressInfo";
class Wizardform extends Component {
    state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      city: "",
      country: ""
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

  render() {
    const {step} = this.state;
    const { firstName, lastName, email, age, city, country } = this.state;
    const values = { firstName, lastName, email, age, city, country };

    switch(step) { 
      case 1:
          return <UserInfo nextStep={this.nextStep} handleChange={this.handleChange}  values={values}
              />
      case 2:
          return <AddressInfo nextStep={this.nextStep} prevStep = {this.prevStep} handleChange={this.handleChange}  values={values}/>
    }
   
  }
}

export default Wizardform;
