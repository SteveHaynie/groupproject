import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import { updateUser } from './redux/actions.js';
import Login from "./components/login/login.js";
import ManagementLanding from "./components/management/managementlanding/managementlandingpage.js";
import UnitCreation from './components/management/unitcreation/unitcreation';
import Users from './components/management/users/users';
import WorkOrderView from './components/management/workorderview/workorderview.js';
import WorkOrderModify from "./components/management/workorderview/workordermodify/workordermodify";

class App extends React.Component {
 

 
 

  render(){

    return (
      <div className="App">
        <Router>
          <Switch>
          
            <Route
              path="/login"
              render={props => {
                if (Object.keys(this.props.user).length === 0)
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
                if (Object.keys(this.props.user).length !== 0 && this.props.user.administrator === true)
                return (
                  <div className="App">
                    <ManagementLanding {...props} />
                  </div>
                );
                else {
                  return (
                  <div className="App">
                  Please Login As Administrator
                </div>)
                }
              }}

            />
              {/* <Route
              path="/unitcreation"
              render={props => {
                return (
                  <div className="App">
                    <UnitCreation {...props} />
                  </div>
                );
              }}

            />
              <Route
              path="/users"
              render={props => {
                return (
                  <div className="App">
                    <Users {...props} />
                  </div>
                );
              }}

            />  */}
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
              <Route
              path="/workorderview"
              render={props => {
                return (
                  <div className="App">
                                   
                      <WorkOrderView {...props} />
                  </div>
                );
              }}
            /> 
             <Route
              path="/managementworkordermodify/:id"
              render={props => {
                return (
                  <div className="App">
                    <WorkOrderModify {...props} />
                  </div>
                );
              }}
            /> 
               {/* <Route
              path="/managementworkordercompletion"
              render={props => {
                return (
                  <div className="App">
                    <WorkOrderView {...props} />
                  </div>
                );
              }}
            />  */}
               {/* <Route
              path="/managementworkordercreation"
              render={props => {
                return (
                  <div className="App">
                    <WorkOrderView {...props} />
                  </div>
                );
              }}
            />  */}
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

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps, {updateUser}) (App );
