import React from "react";
import "./tenantformsubmission.css";
import { connect } from "react-redux";
import axios from "axios";

class TenantFormSubmission extends React.Component {
  constructor() {
    super();

    this.state = {
      subject: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit () {
    const body ={
      tenantEmail: this.props.user.email,
      unitId: this.props.user.unit_id,
      subject: this.state.subject,
      message: this.state.message
    }
    axios.post("?", body).then(response => {
      this.props.updateUser(response.data);
    });

  }

  render() {
    console.log(this.state)
    return (
      <div className="formsubmissioncontainer">
        <div className="formsubmissionbox">
          <h1>Comment? Concern? Enter it below:</h1>
          <textarea
            className="formtextareasubject"
            name="subject"
            type="text"
            value={this.state.subject}
            placeholder="Subject"
            onChange={this.handleChange}
          />
          <textarea
            className="formtextareamessage"
            name="message"
            type="text"
            value={this.state.message}
            placeholder="Message"
            onChange={this.handleChange}
          />
          <div className ="formnavbar">
            <button onClick ={this.handleSubmit} className="formsubmitbutton">Send</button>
            
          </div>
        </div>
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
  {}
)(TenantFormSubmission);
