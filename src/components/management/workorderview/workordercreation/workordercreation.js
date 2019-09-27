import React from "react";
import { Link } from "react-router-dom";
import "./workordercreation.css";
import axios from 'axios';

class CreateNewWorkOrder extends React.Component {

    componentDidMount() {
        axios.get(`/api/manager/units/${this.props.user.id}`).then(response => {
         this.props.updateUnits(response.data)
        });
      }

      
  render() {


    return (
      <div className="createnewcontainer">
        <div className="createcontainer">
          <h1>Create New Work Order</h1>
          <select  className = "createnewselect" value = {this.props.unitNumber} onChange = {this.props.handleChange} name = "unitNumber">

            <option value="">Select Unit Number</option>
</select>
          <input
           autoComplete="off"
            className="createnewinput"
            placeholder="Tenant Name"
            name="tenantName"
            type="text"
            value={this.props.tenantName}
            onChange={this.props.handleChange}
          />
          <input
           autoComplete="off"
            className="createnewinput"
            placeholder="Description of problem needing repair"
            name="issue"
            type="text"
            value={this.props.issue}
            onChange={this.props.handleChange}
          />
          <div className="createnewbuttoncontainer">
            <Link to="/managementportal/work_orders">
              <button className="createnewbutton" onClick={this.props.handleSubmit}>
                Submit
              </button>
            </Link>
            <Link to="/managementportal/work_orders">
              <button className="createnewbutton">
                Cancel
              </button>
            </Link>
          </div>
          <p className="disclaimer">
            Notice: Submitting this work order is deemed an authorization to
            enter your apartment and review and potentially repair the problem
            reported. Upon receipt of this request, an employee of Legacy
            Apartments has authority to enter your residence to review and
            potentially repair the problem.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default CreateNewWorkOrder;