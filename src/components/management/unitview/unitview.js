import React from "react";
import "./unitview.css";
import { connect } from "react-redux";
import { updateUnits } from "../../../redux/actions";
import axios from "axios";

class UnitView extends React.Component {
  componentDidMount() {
    document.title='My Units'
    axios
      .get(`/api/manager/units/${parseInt(this.props.user.id)}`)
      .then(response => {
        console.log("units", response.data);
        this.props.updateUnits(response.data);
      });
  }

  render() {
    console.log(this.props);
    const units = this.props.units.map((unit, index) => {
      return (
        <div className="unit-container" key={index}>
          
          <div className="unitinfocontainer">
          <div className="units1">
            <div className="one-unit">
              Unit Number:<div className="unitinfo">{unit.unit_number}</div>
            </div>
            <div className="one-unit">
              Unit Address:<div className="unitinfo">{unit.address}</div>
            </div>
            <div className="one-unit">
              Unit Description:
              <div className="unitinfo">{unit.unit_description}</div>
            </div>
            <div className="one-unit">
              Animal Allowance:<div className="unitinfo">{unit.animal_allowance}</div>
            </div>
          </div>
          <div className="units2">
           
            <div className="one-unit">
              Bedrooms:<div className="unitinfo">{unit.unit_bedrooms}</div>
            </div>
            <div className="one-unit">
              Baths:<div className="unitinfo">{unit.unit_baths}</div>
            </div>
            <div className="one-unit">
              Sq. Footage:<div className="unitinfo">{unit.unit_sq_footage}</div>
            </div>
            <div className="one-unit">
              Rent:<div className="unitinfo">${unit.unit_rent}</div>
            </div>
            <div className="one-unit">
             Amenities:<div className="unitinfo">{unit.amenities}</div>
            </div>
            
            
          </div></div>
          <button className="user-button" onClick={()=> {this.props.history.push(`/managementunitmodify/${unit.id}`)}}>Update</button>
        </div>
      );
    });
    return (
      <div className="managementunitview">
        {units}
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { units: state.units, user: state.user };
};

export default connect(
  mapStateToProps,
  { updateUnits }
)(UnitView);
