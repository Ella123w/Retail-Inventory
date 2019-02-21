import React, { Component } from "react";
import Wizardform from "./registrationforms/Wizardform";
import LogoTheme from './LogoTheme';
class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { values } = this.props;
    return (
      <div>
      <div className="columns is-marginless">
          <LogoTheme/>
        <div className="column is-6  full-height">
          <Wizardform/>
        </div>
      </div>
        
      </div>
    );
  }
}

export default Registration;
