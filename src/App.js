import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

// import Login from "./components/login/login.js";
import ManagementLanding from "./components/management/managementlanding/managementlandingpage.js";
// import UnitCreation from './components/management/unitcreation/unitcreation'
// import Users from './components/management/users/users'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: {}
    };
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    axios.get("/currentuser").then(response => {
      this.setState({
        currentUser: response.data
      });
    });
  }
  updateUser(user) {
    this.setState({ currentUser: user });
  }

  render(){
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
                    <h1 className="appheader">This is app</h1>
                  </div>
                );
              }}
            />
            {/* <Route
              path="/login"
              render={props => {
                return (
                  <div className="App">
                    <Login />
                  </div>
                );
              }}
            /> */}

            {/* <Route
              path="/managementlanding"
              render={props => {
                return (
                  <div className="App">
                    <ManagementLanding {...props} />
                  </div>
                );
              }}

            /> }
{            
              <Route
              path="/unitcreation"
              render={props => {
                return (
                  <div className="App">
                    <UnitCreation {...props} />
                  </div>
                );
              }}

            /> }
             { <Route
              path="/users"
              render={props => {
                return (
                  <div className="App">
                    <Users {...props} />
                  </div>
                );
              }}

            /> } */}
             {/* <Route
              path="/useraddnotes"
              render={props => {
                return (
                  <div className="App">
                    <AddNotes {...props} />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/useraddtenant"
              render={props => {
                return (
                  <div className="App">
                    <AddTenant {...props} />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/userdocumentupload"
              render={props => {
                return (
                  <div className="App">
                    <DocumentUpload {...props} />
                  </div>
                );
              }}
            // /> */}
              {/* <Route
            //   path="/workorderview"
            //   render={props => {
            //     return (
            //       <div className="App">
            //         <WorkOrderView {...props} />
            //       </div>
            //     );
            //   }}
            // /> }
               {/* <Route
              path="/tenantlanding"
              render={props => {
                return (
                  <div className="App">
                    <TenantLanding />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/tenantworkorderview"
              render={props => {
                return (
                  <div className="App">
                    <TenantWorkOrderView {...props} />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/tenantpayment"
              render={props => {
                return (
                  <div className="App">
                    <TenantPayment {...props} />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/tenantcreateworkorder"
              render={props => {
                return (
                  <div className="App">
                    <TenantPayment {...props} />
                  </div>
                );
              }}
            /> */}
            {/* <Route
              path="/tenantformsubmission"
              render={props => {
                return (
                  <div className="App">
                    <TenantFormSubmission {...props} />
                  </div>
                );
              }}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
