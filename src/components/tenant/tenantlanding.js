import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { workOrderView } from "../../redux/actions.js";

class TenantLanding extends React.Component {

  componentDidMount() {
    axios.get(`/api/tenant/unitinfo/${this.props.user.id}`).then(response => {
      console.log(response.data)
     this.props.workOrderView(response.data)
    });
  }
  render() {
    
    return( <div className="tenantHomePage">testing
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
