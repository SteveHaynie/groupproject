import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { updateUser } from "./redux/actions.js";
import Login from "./components/login/login.js";
import ManagementLanding from "./components/management/managementlanding/managementlandingpage.js";
import UnitCreation from "./components/management/unitcreation/unitcreation";
import Users from "./components/management/users/users";
import AddTenant from "./components/management/users/addtenant/addtenant";
import WorkOrderView from "./components/management/workorderview/workorderview.js";
import WorkOrderModify from "./components/management/workorderview/workordermodify/workordermodify";
import MenuContainer from "./components/menu/menucontainer";
import TenantMenuContainer from "./components/tenant/tenantmenu/tenantmenucontainer";
import TenantLanding from "./components/tenant/tenantlanding";
import TenantWorkOrderView from "./components/tenant/tenantworkorderview/tenantworkorderview";
import TenantCreateWorkOrder from "./components/tenant/tenantcreateworkorder/tenantcreateworkorder.js";
import TenantPayment from "./components/tenant/payment/tenantpayment";
import TenantFormSubmission from "./components/tenant/tenantformsubmission/tenantformsubmission";
import WorkOrderCreation from "./components/management/workorderview/workordercreation/workordercreation.js";
import WorkOrderComplete from "./components/management/workorderview/completeworkorder/completeworkorder.js";
import DocumentUpload from "./components/management/users/documentupload/documentupload.js";
import AddNotes from "./components/management/users/addnotes/addnotes.js";

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/user").then(response => {
      this.props.updateUser(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect from="/" exact to="/login" />

            <Route
              path="/login"
              render={props => {
                if (Object.keys(this.props.user).length === 0)
                  return (
                    <div className="App">
                      <MenuContainer />
                      <Login {...props} />
                    </div>
                  );
              }}
            />
            {this.props.user.id ? (
              <div>
                <Route
                  path="/managementlanding"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <ManagementLanding {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />
                <Route
                  path="/unitcreation"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <UnitCreation {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />
                <Route
                  path="/users/:id"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <Users {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />
                <Route
                  path="/useraddnotes"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <AddNotes {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />

                <Route
                  path="/useraddtenant/:id"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <AddTenant {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />

                <Route
                  path="/userdocumentupload"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <DocumentUpload {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />

                <Route
                  path="/workorderview"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <WorkOrderView {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />
                <Route
                  path="/managementworkordermodify/:id"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <WorkOrderModify {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />
                <Route
                  path="/managementworkordercompletion/:id"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <WorkOrderComplete {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />

                <Route
                  path="/managementworkordercreation/:id"
                  render={props => {
                    if (this.props.user.administrator === true)
                      return (
                        <div className="App">
                          <MenuContainer />
                          <WorkOrderCreation {...props} />
                        </div>
                      );
                    else {
                      return (
                        <div className="App">Please Login As Administrator</div>
                      );
                    }
                  }}
                />

                <Route
                  path="/tenantlanding"
                  render={props => {
                    if (this.props.user.administrator === false)
                      return (
                        <div className="App">
                          <TenantMenuContainer />
                          <TenantLanding {...props} />
                        </div>
                      );
                    else {
                      return <div className="App">Please Login As Tenant</div>;
                    }
                  }}
                />
                <Route
                  path="/tenantworkorderview"
                  render={props => {
                    if (this.props.user.administrator === false)
                      return (
                        <div className="App">
                          <TenantMenuContainer />
                          <TenantWorkOrderView {...props} />
                        </div>
                      );
                    else {
                      return <div className="App">Please Login As Tenant</div>;
                    }
                  }}
                />
                <Route
                  path="/tenantpayment"
                  render={props => {
                    if (this.props.user.administrator === false)
                      return (
                        <div className="App">
                          <TenantMenuContainer />
                          <TenantPayment {...props} />
                        </div>
                      );
                    else {
                      return <div className="App">Please Login As Tenant</div>;
                    }
                  }}
                />

                <Route
                  path="/tenantcreateworkorder"
                  render={props => {
                    if (this.props.user.administrator === false)
                      return (
                        <div className="App">
                          <TenantMenuContainer />
                          <TenantCreateWorkOrder {...props} />
                        </div>
                      );
                    else {
                      return <div className="App">Please Login As Tenant</div>;
                    }
                  }}
                />

                <Route
                  path="/tenantformsubmission"
                  render={props => {
                    if (this.props.user.administrator === false)
                      return (
                        <div className="App">
                          <TenantMenuContainer />
                          <TenantFormSubmission {...props} />
                        </div>
                      );
                    else {
                      return <div className="App">Please Login As Tenant</div>;
                    }
                  }}
                />
              </div>
            ) : null}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(App);
