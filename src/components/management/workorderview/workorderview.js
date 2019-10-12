import React from "react";
import "./workorderview.css";
import moment from "moment";
import { workOrderView } from "../../../redux/actions.js";
import { connect } from "react-redux";
import axios from "axios";

class WorkOrderView extends React.Component {
  state = {
    render: false
  };

  componentDidMount() {
    axios
      .get(`/api/manager/workorders/${this.props.user.id}`)
      .then(response => {
        this.props.workOrderView(response.data);
      });
  }
  handleClick() {
    this.props.history.push(
      `/managementworkordercreation/${this.props.user.id}`
    );
  }

  handleDelete = workOrderId => {
    axios
      .delete(`/api/manager/delete/workorder/${workOrderId}`)
      .then(() => {
        axios
          .get(`/api/manager/workorders/${this.props.user.id}`)
          .then(response => {
            this.props.workOrderView(response.data);
            console.log("first", this.state);
            this.setState({ render: true });
            console.log("second", this.state);
          })
          .catch(console.error());
      })
      .catch(console.error());
  };

  render() {
    return (
      <div className="managementworkordercontainer">
        <button
          className="managementcreatenwob"
          onClick={() => {
            this.handleClick();
          }}
        >
          Create New Work Order
        </button>
        {this.props.workOrders.map((workOrder, index) => (
          <div className="managementindividualWorkOrder" key={index}>
            <div className="managementwodate">
              Date Submitted: {moment(workOrder.created_at).format("lll")}
            </div>
            <div className="managementinformationcontainer">
              <div className="managementunitandname">
                <p className="managementunitNumber"> {workOrder.unit_number}</p>
              </div>
              <p className="managementissue"> {workOrder.description}</p>
              <div className="managementwonavbar">
                <button
                  className="managementwonavbarbutton"
                  onClick={() => {
                    this.props.history.push(
                      `/managementworkordermodify/${workOrder.id}`
                    );
                  }}
                >
                  Modify
                </button>

                <button
                  className="managementwonavbarbutton"
                  onClick={() => {
                    this.props.history.push(
                      `/managementworkordercompletion/${workOrder.id}`
                    );
                  }}
                >
                  Complete
                </button>

                <button
                  className="managementwonavbardeletebutton"
                  onClick={() => {
                    this.handleDelete(workOrder.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workOrders: state.workOrders,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { workOrderView }
)(WorkOrderView);
