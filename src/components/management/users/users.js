import React from "react";
import "./users.css";
import { connect } from "react-redux";
import { updateTenants } from "../../../redux/actions";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    document.title='Users'
    axios
      .get(`/api/manager/tenants/${parseInt(this.props.match.params.id)}`)
      .then(response => {
        console.log("tenants", response.data);
        this.props.updateTenants(response.data);
      });
  }

  

  render() {
    console.log(this.props);
    const tenants = this.props.tenants.map((tenant, index) => {
      return (
        <div className="tenant-container" key={index}>
          <button
            className="userupdatebutton"
            onClick={() => {
              this.props.history.push(`/usermanagerview/${tenant.id}`);
            }}
          >
            Update
          </button>
          {this.renderField("First Name", tenant.first_name)}
          {this.renderField("Last Name", tenant.last_name)}
          {this.renderField("Email", tenant.email)}
          {this.renderField("Unit Number", tenant.unit_number)}
        </div>
      );
    });
    return (
      <div>
        <div className="usersview">
            <button className="CNT_button" onClick={() => this.props.history.push(`/useraddtenant/${this.props.user.id}`)}>
              New User
            </button>
          <div className="users-body">
            {tenants}
          </div>
        </div>
      </div>
    );
  }

  renderField (label, value) {
    return (
    <div className="field_container">
            <div className="field_label">{label}:</div>
            <div className="field_value">{value}</div>
          </div>
        );
  }
}

const mapStateToProps = state => {
  return { tenants: state.tenants, user: state.user };
};

export default connect(
  mapStateToProps,
  { updateTenants }
)(Users);
