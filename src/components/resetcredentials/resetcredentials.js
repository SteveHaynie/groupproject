import React from "react";
import axios from "axios";
import "./reset.css";

class ResetCredentials extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidMount(){
    document.title='Reset Credentials'
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  sendEmail = async () => {
    try {
      const body = {
        email: this.state.email
      };
      if (!body.email) {
        alert("please enter a valid email address");
      } else {
        await axios.post("/api/email/resetpassword", body);
        alert(`instructions will be sent to ${this.state.email}.`);
        this.setState({
          email: ""
        });
        this.props.history.push("/login");
      }
    } catch (error) {
      console.error(error, "did not work");
    }
  };

  render() {
    return (
      <div className="resetwrapper">
        <div className="resetcontainer">
          <h1>Please Enter your email address.</h1>

          <input
            className="form-input"
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <button className="submitresetbutton" onClick={this.sendEmail}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ResetCredentials;
