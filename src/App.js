import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login.js";

import ManagementLandingPage from "./components/management/landingpagemanager/managementlandingpage.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div className="App">
                    <Login {...props} />
                  </div>
                );
              }}
            />
            <Route
              path="/managementlanding"
              render={props => {
                return (
                  <div className="App">
                    <ManagementLandingPage {...props} />
                  </div>
                );
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
