import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./components/login/login.js";
// import ManagementLanding from "./components/management/managementlanding/managementlanding.js";

class App extends React.Component {




  render () {
  return (
    <div className="App">
  

     <Router>
      <Switch>
{/* 
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
              exact
              path="/"
              render={props => {
                return (
                  <div className="App">
                    <ManagementLanding {...props} />
                    
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
