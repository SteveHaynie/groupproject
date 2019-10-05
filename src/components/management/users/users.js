import React from "react";
import "./users.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateTenants } from "../../../redux/actions";
import axios from "axios";

class Users extends React.Component {

  componentDidMount() {
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
        <Link to='/usermanagerview'>...</Link>
          <div className="one-tenant">{tenant.first_name}</div>
          <div className="one-tenant">{tenant.last_name}</div>
          <div className="one-tenant">{tenant.email}</div>
          <div className="one-tenant">{tenant.unit_number}</div>
          <button>reset password</button>
        </div>
      );
    });
    return (
      <div>
        <div className="managementHomePage">
          <div className="management-body">
            {tenants}
            <Link to={`/useraddtenant/${this.props.user.id}`}>/>Create New Tenant</Link>
          </div>
        </div>
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
