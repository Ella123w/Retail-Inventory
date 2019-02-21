import React, { Component } from "react";
import ReactDOM from "react-dom";

class UserInfo extends Component {
  saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

  render() {
    const { values } = this.props;
    return (
      <div className="App">
        <h3 className="is-size-4">Enter User Details</h3>
        <form>
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label>First Name</label>
                <input className="input" placeholder="First Name"  onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName} />
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label>Second Name</label>
                <input className="input" placeholder="Last Name" onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}/>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label>Email</label>
                <input className="input" placeholder="Email" onChange={this.props.handleChange('email')}
                    defaultValue={values.email} />
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label>Re-Enter Email</label>
                <input className="input" placeholder="Re-Enter Email" />
              </div>
            </div>
          </div>
          <div className="columns">
              <div className="column is-6">
               <button className="button is-link">Cancel</button>
               <button className="button is-primary" onClick={this.saveAndContinue}>Next Step</button>

            </div>
           </div>
        </form>
      </div>
    );
  }
}

export default UserInfo;
