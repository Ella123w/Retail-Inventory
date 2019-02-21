import React, { Component } from "react";
import ReactDOM from "react-dom";


class AddressInfo extends Component { 
	saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() { 
       return (
           <div className="App">
        <h3 className="is-size-4">Enter Address Details</h3>
         <form>
            <div className="columns">
              <div className="column is-6">
               <button className="button is-link" onClick={this.back}>Back</button>
               <button className="button is-primary" onClick={this.saveAndContinue}>Next Step</button>

            </div>
           </div>
        </form>
        </div>
       )


    }

}


export default AddressInfo;