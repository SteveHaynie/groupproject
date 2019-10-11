import React from "react";
import axios from "axios";
import { updateTenants} from "../../../../redux/actions.js";
import { updateUnits } from '../../../../redux/actions.js'
import { connect } from "react-redux";

class UserManagerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      unit_number: "",
      unit_id: "",
      listOfUnits: '' 
    };
    this.getTenant = this.getTenant.bind(this);
    this.modifyTenant = this.modifyTenant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    console.log( 'here',this.props.units)
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
    .get(`/api/manager/units/${parseInt(this.props.match.params.id)}`)
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

  handleSubmit() {
    const body = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      unit_id: this.state.unit_id
    };

    axios.put(`/api/manager/modify/tenant/${parseInt(this.props.match.params.id)}`, body)
    .catch( console.error)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="one-tenant">
          {this.state.first_name}
          <button name="first_name" onClick={this.modifyTenant}>
            ...
          </button>
        </div>
        <div className="one-tenant">
          {this.state.last_name}
          <button name="last_name" onClick={this.modifyTenant}>
            ...
          </button>
        </div>
        <div className="one-tenant">
          {this.state.email}
          <button name="email" onClick={this.modifyTenant}>
            ...
          </button>
        </div>
        <div className="one-tenant">
        <select
          className="form-input"
          value={this.state.listOfUnits}
          onChange={this.handleChange}
          name="listOfUnits"
        >
          <option value="">Select Unit Number</option>
          {this.props.units.map((unit, index) => (
            <option key={index} value={unit.id}>
              {unit.listOfUnits}
            </option>
          ))}
        </select>
          {/* {this.state.unit_number}
          <button name="unit_number" onClick={this.modifyTenant}>
            ...
          </button> */}
        </div>
        <button onClick={this.handleSubmit}>Send it</button>
        <button>reset password</button>
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
