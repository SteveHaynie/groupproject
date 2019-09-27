import React from "react";
import { Link } from "react-router-dom";
import { addUnit } from "../../../redux/actions.js";
import axios from "axios";
import "./unitcreation.css";

class UnitCreation extends React.Component {
  constructor() {
    super();

    this.state = {
      unitAddress: "",
      unitNumber: "",
      unitType: "",
      unitBedrooms: "",
      unitBathrooms: "",
      unitSqFootage: "",
      AnimalAllowance: false,
      unitDescription: "",

    };
    this.inputUnit = this.inputUnit.bind(this);
  }

  componentDidMount() {
    document.title = "Unit Creation";
  }

  handleChange(event) {
      this.setState({ unitType: event.target.value })
  }
  // needs to be a way to handle all the changes without making a ton of 
  // these functions.  Also... redux maybe...?

  async inputUnit() {
    try {
      const body = {
        unit_address: this.state.unitAddress,
        unit_number: this.state.unitNumber,
        unit_type: this.state.unitType,
        unit_bedrooms: this.state.unitBedrooms,
        unit_bath: this.state.unitBathrooms,
        unit_sq_footage: this.state.unitSqFootage,
        animal_allowance: this.state.AnimalAllowance,
        unit_description: this.state.unitDescription
      };
      if (body.unit_address) {
        await axios.post("/api/add_unit", body);
      } else {
        alert("Please input Unit's Address");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  render() {
    return (
      <div className="ManagementHomePage">
        {/* <div className='manage-header'>Unit Creation Page</div> */}
        <div className="navbar">
          <Link to="/unitcreation">Create new unit</Link>
          <Link to="/users">View users</Link>
          <Link to="/workorderview">View work orders</Link>
          <Link to="/login">Sign out</Link>
        </div>
        <div className="UnitCreationPage">
          <div className="UnitCreationTitle">Add a New Unit:</div>
          <div className="UnitAddress">
            Unit Address:
            <input />
          </div>
          <div className="UnitNumber">
            Unit #: <input />{" "}
          </div>
          <div className="Amenities">
            Unit Description:
            <div className="Type">
              {" "}
              Type:
              {/* thinking of adding functionality to be able to add the type
              of unit here.  Would need a small database if we did that
              though, might not be worth the extra effort.  If you do so
              look up popUp.js in personal project to remind self how to pull
              from and map over array*/}
              <select
                // value={this.state.value} onChange={}
              >
                <option>Basement</option>
                <option>Attic</option>
                <option>Duplex</option>
                <option>Multiplex</option>
                <option>Complex</option>
                <option>Shed</option>
                <option>Nuclear Fall Out Shelter</option>
                <option>Other</option>
              </select>
            </div>
            <div className="Bedrooms">
              {" "}
              Bedrooms:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div className="Bathrooms">
              Bathrooms:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="SqFoot">
              Sq Footage:
              <input />
            </div>
            <div className="AnimalAllowance">
              {" "}
              Animals Allowed:
              <select>
                <option>Please Select an Option</option>
                <option>True</option>
                <option>False</option>
              </select>
            </div>
            {/* <textarea className="UnitDescription"
                placeholder="Description"
            /> */}
            <div className="UnitDescription">
              <textarea placeholder="Description" />
            </div>
            <button onclick={this.inputUnit}>Save Unit to Management Portal</button>
          </div>
          <div className="MonthlyRent">
            Monthly Rent Due:
            <input />
          </div>
          <div className="AdditionalCharges">
            Additional Charges:
            <input />
          </div>
        </div>
      </div>
    );
  }
}

export default UnitCreation;
