import React from "react";
import { Link } from "react-router-dom";
import "./workordercreation.css";
import axios from 'axios';
import { updateUnits } from '../../../../redux/actions.js';
import { connect } from 'react-redux';

class CreateNewWorkOrder extends React.Component {

  constructor () {
    super();

    this.state ={
      unit_id: "",
      description : ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    componentDidMount() {
        axios.get(`/api/manager/units/${parseInt(this.props.match.params.id)}`).then(response => {
          
         this.props.updateUnits(response.data)
        });
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit () {
        const body = {
          unit_number:  this.state.unit_number,
          description: this.state.description,

        }

        axios.post(`/api/manager/workorder/new`, body).then ( () => {

          this.setState ({
            unit_id: "",
            description : ''
          })
        })

     

      }


     

      
  render() {
console.log(this.props.match.params.id)



    return (
      <div className="createnewcontainer">
        <div className="createcontainer">
          <h1>Create New Work Order</h1>
          <select  className = "createnewselect" value = {this.state.unit_id} onChange = {this.handleChange} name = "unit_id">

            <option value="">Select Unit Number</option>
            {this.props.units.map((unit, index) => 
<option key={index} value={unit.id}>{unit.unit_number}</option>

  )}

</select>
          
          <textarea
           autoComplete="off"
            className="createnewinput"
            placeholder="Description of problem needing repair"
            name="description"
            type="text"
            value={this.description}
            onChange={this.handleChange}
          />
          <div className="createnewbuttoncontainer">
            <Link to="/workorderview">
              <button className="createsubmitbutton" onClick={this.handleSubmit}>
                Submit
              </button>
            </Link>
            <Link to="/workorderview">
              <button className="createcancelbutton">
                Cancel
              </button>
            </Link>
          </div>
          <p className="disclaimer">
            Notice: Submitting this work order is deemed an authorization to
            enter your unit and review and potentially repair the problem
            reported. Upon receipt of this request, your landlord has authority to enter your residence to review and
            potentially repair the problem.{" "}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user : state.user,
      units : state.units
    }
  }
  
  export default connect(mapStateToProps, {updateUnits}) (CreateNewWorkOrder );