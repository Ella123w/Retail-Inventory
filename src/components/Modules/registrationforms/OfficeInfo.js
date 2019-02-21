import React, { Component } from "react";
import ReactDOM from "react-dom";


class AddressInfo extends Component { 
    render() { 
       return (
           <div className="App">
        <h3 className="is-size-4">Enter Office Details</h3>
         <form>
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label>Age</label>
                <input className="input" placeholder="First Name"  
                     />
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label>City</label>
                <input className="input" placeholder="Last Name"/>
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
       )


    }

}


export default AddressInfo;