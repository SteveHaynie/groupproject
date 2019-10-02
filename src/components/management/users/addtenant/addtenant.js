import React from "react";
import axios from "axios";
import { updateUnits } from "../../../../redux/actions.js";
import { connect } from "react-redux";
class AddTenant extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      unit_id: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/manager/units/${parseInt(this.props.match.params.id)}`)
      .then(response => {
        this.props.updateUnits(response.data);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitTenantCreation = async () => {
    try {
      const body = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        unit_id: ""
      };
      if (
        body.firstName &&
        body.lastName &&
        body.email &&
        body.password &&
        body.unit_id
      ) {
        axios.post(`/api/manager/tenants/new/${this.props.user.id}`, body);
        alert(`successfully added tenant to unit # ${this.props.unit_id}`);
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          unit_id: ""
        });
      } else {
        alert("fields cannot be empty");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  render() {
    return (
      <div className="tenant-creation-body">
        <input
          className="form-input"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          className="form-input"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <input
          className="form-input"
          name="email"
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          className="form-input"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <select
          className="form-input"
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

        <button
          className="submit-button"
          onClick={this.handleSubmitTenantCreation}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    tenants: state.tenants,
    units: state.units
  };
};

export default connect(
  mapStateToProps,
  { updateUnits }
)(AddTenant);
