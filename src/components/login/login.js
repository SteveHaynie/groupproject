import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
// import "../../reset.css";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      currentUser: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.title = "Login please";
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  updateUser(user) {
    this.setState({ currentUser: user })
  }

  async handleLogin() {
    try {
      const body = {
        email: this.state.email,
        password: this.state.password,
      };
      if (body.email && body.password) {
        await axios.post("/login", body).then(response => {
          this.updateUser(response.data.user)
            if (response.data.administrator === true) {
              this.props.history.push('/managementlanding')
            } else {
              this.props.history.push('/tennantlanding')
      }});
          
        // server end points need to be made******************
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
                this.setState({ email: event.target.value })
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
