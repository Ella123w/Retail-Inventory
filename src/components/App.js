import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Modules/Login";
import Registration from "./Modules/Registration";
import DashBoard from "./Modules/DashBoard";
import PurchaseListing from "./Modules/purchaseorders/PurchaseListing";
import ForgotPassword from "./Modules/ForgotPassword";
class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route
              exact
              path="/dashboard/purchaseorder"
              component={PurchaseListing}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
