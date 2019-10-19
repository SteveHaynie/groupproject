import React from "react";
import axios from "axios";
import { updateTenants} from "../../../../redux/actions.js";
import { updateUnits } from '../../../../redux/actions.js'
import { connect } from "react-redux";
import "./usermanagerview.css";

class UserManagerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      unit_number: "",
      unit_id: "",
      listOfUnits: ""

    };
    this.getTenant = this.getTenant.bind(this);
    this.modifyTenant = this.modifyTenant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    document.title='Update User'
    if (this.props.tenants.length) {
      this.getTenant(this.props.tenants);
    } else {
      axios
        .get(`/api/manager/tenants/${parseInt(this.props.user.id)}`)
        .then(response => {
          this.props.updateTenants(response.data);
          this.getTenant(response.data);
        });
    }
    axios
    .get(`/api/manager/units/${parseInt(this.props.user.id)}`)
    .then(response => {
      this.props.updateUnits(response.data)
    })
  }

  getTenant(tenant) {
    const singleTenant = tenant.find(
      e => e.id === parseInt(this.props.match.params.id)
    );

    this.setState({
      first_name: singleTenant.first_name,
      last_name: singleTenant.last_name,
      email: singleTenant.email,
      unit_number: singleTenant.unit_number,
      unit_id: singleTenant.unit_id
    });
  }

  modifyTenant(event) {
    const inputValue = window.prompt("");
    if (!inputValue) {
      return alert("try again plz");
    } else {
      this.setState({
        [event.target.name]: inputValue
      });
    }
  }

   handleSubmit = async () => {
    const body = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      unit_id: this.state.unit_id
    };
try {
  await
  axios.put(`/api/manager/modify/tenant/${parseInt(this.props.match.params.id)}`, body)
  alert('success')
  this.props.history.push(`/users/${this.props.user.id}`)
} catch (error) {
  console.error(error)
}
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="user-manager-view-box">
        <div className="one-tenant">
          <button className="first_name" onClick={this.modifyTenant}
          name='first_name'
          >
            {this.state.first_name}
          </button>
        
        
          
          <button className="last_name" onClick={this.modifyTenant}
          name='last_name'
          >
            {this.state.last_name}
          </button>
      
          <button className="email" onClick={this.modifyTenant}
          name='email'
          >
            {this.state.email}
          </button>
       
        <select
          value={this.state.unit_id}
          onChange={this.handleChange}
          name="unit_id"
        >
          <option value="">Select Unit Number</option>
          {this.props.units.map((unit, index) => (
            <option key={index} value={unit.id}>
              {unit.unit_number}
            </option>
          ))}
        </select>
          {/* {this.state.unit_number}
          <button name="unit_number" onClick={this.modifyTenant}>
            ...
          </button> */}
        </div>
        <button className="submitCB" onClick={this.handleSubmit}>Submit Changes</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tenants: state.tenants, user: state.user, units: state.units };
};

export default connect(
  mapStateToProps,
  { updateTenants, updateUnits }
)(UserManagerView);
