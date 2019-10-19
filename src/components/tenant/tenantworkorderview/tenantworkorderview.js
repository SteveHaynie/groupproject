import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import "./tenantworkorderview.css";
import { workOrderView } from "../../../redux/actions.js";

class TenantWorkOrderView extends React.Component {
  componentDidMount() {
    document.title='Work Orders'
    axios.get(`/api/tenant/unitinfo/${this.props.user.id}`).then(response => {
      console.log(response.data)
      this.props.workOrderView(response.data);
    });
  }

  handleClick () {
this.props.history.push(`/tenantcreateworkorder/${this.props.user.id}`)

  }

  render() {
    
    return (
      <div className="tenantworkordercontainer">
        <button className="tenantcreatenwob" onClick={() => {this.handleClick()}}>Create New Work Order</button>
        {this.props.workOrders.map((workOrder, index) => (
          <div className="tenantindividualWorkOrder" key={index}>
            <div className="tenantwodate">
              Date Submitted: {moment(workOrder.created_at).format("lll")}
            </div>
            <div className="tenantinformationcontainer">
              <div className="tenantunitandname">
                <p className="tenantunitNumber"> {workOrder.unit_number}</p>
              </div>
              <p className="tenantissue"> {workOrder.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
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
)(TenantWorkOrderView);
