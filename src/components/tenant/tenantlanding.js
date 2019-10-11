import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./tenantlanding.css"
import { workOrderView } from "../../redux/actions.js";

class TenantLanding extends React.Component {

  componentDidMount() {
    axios.get(`/api/tenant/unitinfo/${this.props.user.id}`).then(response => {
      console.log(response.data)
     this.props.workOrderView(response.data)
    });
  }
  render() {
    
    return( <div className="tenantHomePage">Welcome, {this.props.user.first_name}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    workOrders: state.workOrders
  };
};

export default connect(
  mapStateToProps,
  { workOrderView }
)(TenantLanding);
