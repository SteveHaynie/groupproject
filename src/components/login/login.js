import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "../../reset.css";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    document.title = "Login please";
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  async handleLogin() {
    try {
      const body = {
        user_name: this.state.username,
        password: this.state.password
      };
      if (body.user_name && body.password) {
        await axios.post("/login", body);
        // server end points need to be made******************
        // this.props.history.push('/name of landing page')
      } else {
        alert("Please Enter a Valid User name and Password");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleLogin();
    }
  }

  async handleSignUp() {
    try {
      const body = {
        user_name: this.state.username,
        password: this.state.password
      };
      if (body.user_name && body.password) {
        await axios.post("/sign_up", body);
        // server end points need to be made*****************
        alert("Successfully Signed Up!");
        // this.props.history.push('/name of the landing page')
      } else {
        alert("Please Enter a User Name and Password");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginBox">
          <div className="Title">
            The Last Small Business Property Management Tool that You'll Ever
            Need!
          </div>
          <div className="Username">
            <input
              placeholder="Email"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
          </div>
          <div className="Password">
            <input
              placeholder="Password"
              type="password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div className="LoginButton" onClick={this.handleLogin}>
            Login
          </div>
          <div className="SignUpInput" onClick={this.handleSignUp}>
            Sign Up
          </div>
          <Link className="ResetCredential" to="/reset_credentials">
            Trouble signing in?
          </Link>
          {/* will need a page to reset the password  */}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
// Honestly not completely solid on what withRouter does.  Copying that part form personal project.  -Tim J.
