import React, { Component } from "react";
import logo from "../../assets/images/slogo.png";
import totallogo from "../../assets/images/totallogo.png";


class LogoTheme extends Component {

	    render() { return(

				<div className="column is-6  is-hidden-mobile logo-block full-height">
				          <div className="has-text-centered leftbar-content">
				            <div className="image-logo has-text-centered">
				              <img src={logo} alt="Total-logo" title="Total-logo" />
				              <h6> Welcome to </h6> <h3> TOTAL </h3>
				            </div>

				            <div />
				          </div>
				        </div>

	    	)}
}


export default LogoTheme;