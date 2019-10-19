import React from "react";
import axios from "axios";
import "./unitmodify.css";
import { connect } from "react-redux";
import { updateUnits } from "../../../redux/actions";

class UnitModify extends React.Component {
  constructor() {
    super();

    this.state = {
      unitAddress: "",
      unitNumber: "",
      unitType: "Null",
      unitBedrooms: 1,
      unitBathrooms: 1,
      unitSqFootage: "",
      animalAllowance: false,
      unitDescription: "",
      unitRent: ""
    };
    this.inputUnit = this.inputUnit.bind(this);
  }

  componentDidMount() {
      document.title='Modify Unit'
    axios
      .get(`/api/manager/units/${parseInt(this.props.user.id)}`)
      .then(response => {
        this.props.updateUnits(response.data);
        this.getUnit(response.data)

      });
  }
  getUnit(units) {
    const unit = units.find(e => e.id === parseInt(this.props.match.params.id))
    this.setState({
        unitAddress: unit.address,
        unitNumber: unit.unit_number,
        unitType: unit.unit_type,
        unitBedrooms: unit.unit_bedrooms,
        unitBathrooms: unit.unit_bathrooms,
        unitSqFootage: unit.unit_sq_footage,
        AnimalAllowance: unit.animal_allowance,
        unitDescription: unit.unit_description,
        unitRent: unit.unit_rent
    })
  }

  async inputUnit() {
    try {
      const body = {
        address: this.state.unitAddress,
        unitNumber: this.state.unitNumber,
        unitType: this.state.unitType,
        unitBedrooms: this.state.unitBedrooms,
        unitBaths: this.state.unitBathrooms,
        unitSqFootage: this.state.unitSqFootage,
        animalAllowance: this.state.AnimalAllowance,
        unitDescription: this.state.unitDescription,
        unitRent: this.state.unitRent
      };
      if (body.address && body.unitRent && body.unitType !== "Null") {
        await axios.put(`/api/manager/modify/unit/${parseInt(this.props.match.params.id)}`, body);
        //need new link for axios post request
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
        alert("One or more required fields is missing.");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  render() {
    
    return (
      <div className="unitmodify">
        <div className="unitmodifypage">
          <div className="UnitCreationTitle">Modify a Unit:</div>
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
              Type: {" "}
              
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
              </select>{" "}
              *
            </div>
            <div className="Bedrooms">
              {" "}
              Bedrooms:{" "}
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
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="Bathrooms">
              Bathrooms: {" "}
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
              Sq Footage: {" "}
              <input
                value={this.state.unitSqFootage}
                onChange={event =>
                  this.setState({ unitSqFootage: event.target.value })
                }
              />
            </div>
            <div className="AnimalAllowance">
              {" "}
              Animals Allowed: {" "}
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
              Monthly Rent Due: {" "}
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
    user: state.user,
    units: state.units
  };
};

export default connect(mapStateToProps, {updateUnits})(UnitModify);
