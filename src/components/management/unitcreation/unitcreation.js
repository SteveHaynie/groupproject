import React from "react";
// import { Link } from "react-router-dom";
// import { addUnit } from "../../../redux/actions.js";
import axios from "axios";
import "./unitcreation.css";
import { connect } from "react-redux";

class UnitCreation extends React.Component {
  constructor() {
    super();

    this.state = {
      unitAddress: "",
      unitNumber: "",
      unitType: "Null",
      unitBedrooms: 1,
      unitBathrooms: 1,
      unitSqFootage: "",
      AnimalAllowance: false,
      unitDescription: "",
      unitRent: ""
    };
    this.inputUnit = this.inputUnit.bind(this);
  }

  componentDidMount() {
    document.title = "Unit Creation";
  }
 

  async inputUnit() {
    try {
      const body = {
        address: this.state.unitAddress,
        unit_number: this.state.unitNumber,
        unit_type: this.state.unitType,
        unit_bedrooms: this.state.unitBedrooms,
        unit_baths: this.state.unitBathrooms,
        unit_sq_footage: this.state.unitSqFootage,
        animal_allowance: this.state.AnimalAllowance,
        unit_description: this.state.unitDescription,
        unit_rent: this.state.unitRent
      };
      if (body.address && body.unit_rent && body.unit_type !== "Null") {
        await axios.post(`/api/manager/units/new/${this.props.user.id}`, body);
        this.setState({
          unitAddress: "",
          unitNumber: "",
          unitType: "Null",
          unitBedrooms: 1,
          unitBathrooms: 1,
          unitSqFootage: "",
          AnimalAllowance: false,
          unitDescription: "",
          unitRent: ""
        });
        console.log(body);
      } else {
        alert(
          "One or more required fields is missing."
        );
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  render() {
    // console.log(currentUser)
    return (
      <div className="ManagementHomePage">
        <div className="UnitCreationPage">
          <div className="UnitCreationTitle">Add a New Unit:</div>
          <div className="UnitAddress">
            Unit Address:
            <input
              value={this.state.unitAddress}
              onChange={event =>
                this.setState({ unitAddress: event.target.value })
              }
            />{" "}
            *
          </div>
          <div className="UnitNumber">
            Unit #:{" "}
            <input
              value={this.state.unitNumber}
              onChange={event =>
                this.setState({ unitNumber: event.target.value })
              }
            />{" "}
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
                value={this.state.unitType}
                onChange={event =>
                  this.setState({ unitType: event.target.value })
                }
              >
                <option value="Null">Please Select an Option</option>
                <option value="Basement">Basement</option>
                <option value="Attic">Attic</option>
                <option value="Duplex">Duplex</option>
                <option value="Multiplex">Multiplex</option>
                <option value="Complex">Complex</option>
                <option value="Single House">Single House</option>
                <option value="Shed">Shed</option>
                <option value="N.F. Shelter">Nuclear Fall Out Shelter</option>
                <option value="Other">Other</option>
              </select> *
            </div>
            <div className="Bedrooms">
              {" "}
              Bedrooms:
              <select
                value={this.state.unitBedrooms}
                onChange={event =>
                  this.setState({ unitBedrooms: event.target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div className="Bathrooms">
              Bathrooms:
              <select
                value={this.state.unitBathrooms}
                onChange={event =>
                  this.setState({ unitBathrooms: event.target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="SqFoot">
              Sq Footage:
              <input
                value={this.state.unitSqFootage}
                onChange={event =>
                  this.setState({ unitSqFootage: event.target.value })
                }
              />
            </div>
            <div className="AnimalAllowance">
              {" "}
              Animals Allowed:
              <select
                value={this.state.AnimalAllowance}
                onChange={event =>
                  this.setState({ AnimalAllowance: event.target.value })
                }
              >
                <option value="Null">Please Select an Option</option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
            {/* <textarea className="UnitDescription"
                placeholder="Description"
            /> */}
            <div className="UnitDescription">
              <textarea
                value={this.state.unitDescription}
                onChange={event =>
                  this.setState({ unitDescription: event.target.value })
                }
                placeholder="Description"
              />
            </div>
            <div className="MonthlyRent">
              Monthly Rent Due:
              <input
                value={this.state.unitRent}
                onChange={event =>
                  this.setState({ unitRent: event.target.value })
                }
              />{" "}
              *
            </div>
            <button className="SaveUnitButton" onClick={this.inputUnit}>
              Save Unit to Management Portal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UnitCreation);
