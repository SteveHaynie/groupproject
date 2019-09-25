import React from "react";
import "./workordermodify.css";
import { workOrderView } from '../../../../redux/actions.js';
import { connect } from 'react-redux';
import axios from 'axios';

class WorkOrderModify extends React.Component {
    constructor(props) {
        super(props);
         const workOrder = this.props.workOrders.find(e => e.id === parseInt(this.props.match.params.id))
          

        this.state = {
          description: workOrder.description,
          unit_id: workOrder.unit_id
        
         
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
       
      }
      



      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit() {
     
        const body = {
          
         unit_id: this.state.unit_id,
          description: this.state.description,
          id: parseInt(this.props.match.params.id)
        };
        axios.put(`/api/manager/modify/workorder/:${parseInt(this.props.match.params.id)}`, body).then( () => {
          
         
          this.props.history.push("/workorderview");
          
        });
      }
      
  render() {
     console.log(this.state, "modify state")
    return (
        
        <div className="modifycontainer">
        <div className="modifybox">
          <h1 className ="modifyheader">Modify Work Order</h1>
          <div className="modifyunitnumber">{this.state.unitNumber}</div>
          <textarea
            className="modifytextarea"
            
            name="tenantName"
            type="text"
            value={this.state.unit_id}
            onChange={this.handleChange}
          />
          <textarea
            className="modifytextarea"
           
            name="issue"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        <div className="modifybuttoncontainer">
          
          <button className ="modifysubmitbutton" onClick={this.handleSubmit}>Submit</button>
         
          
          <button className ="modifysubmitbutton" onClick={() => {this.props.history.push("/workorderview")}}>Cancel</button>
          
          </div>
        </div>
      </div>);
    
    }}

    const mapStateToProps = (state) => {
        return {
          workOrders : state.workOrders
        }
      }
      
      export default connect(mapStateToProps, {workOrderView}) (WorkOrderModify );