import React from "react";
import { Link } from "react-router-dom";
import "./tenantcreateworkorder.css";
import axios from 'axios';

import { connect } from 'react-redux';

class TenantCreateWorkOrder extends React.Component {

  constructor () {
    super();

    this.state ={
      
      description : ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

   

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit () {
        const body = {
          unit_id:  this.props.user.unit_id,
          description: this.state.description,

        }

        axios.post(`?`, body).then ( () => {

          this.setState ({
            
            description : ''
          })
          this.props.history.push("/tenantworkorderview")
        })

     

      }


     

      
  render() {




    return (
      <div className="createnewcontainer">
        <div className="createcontainer">
          <h1>Create New Work Order</h1>
          
          
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
            <Link to="/tenantworkorderview">
              <button className="createsubmitbutton" onClick={this.handleSubmit}>
                Submit
              </button>
            </Link>
            <Link to="/tenantworkorderview">
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
      
    }
  }
  
  export default connect(mapStateToProps, {}) (TenantCreateWorkOrder );