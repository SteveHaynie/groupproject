import React from "react";
import "./completeworkorder.css";
import { workOrderView } from '../../../../redux/actions.js';
import { connect } from 'react-redux';
import axios from 'axios';

class WorkOrderComplete extends React.Component {
    constructor(props) {
        super(props);
         
          

        this.state = {
          description: "",
          unit_id: '',
          notes: ""
        
         
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
       
      }

      componentDidMount() {
        
        if(this.props.workOrders.length) {
        this.getWorkOrder(this.props.workOrders)
        
        }
        else {
          axios.get(`/api/manager/workorders/${this.props.user.id}`).then(response => {
      
            this.props.workOrderView(response.data)
            this.getWorkOrder(response.data)
           });
        }
      }

      
      getWorkOrder(workOrders) {
        const workOrder = workOrders.find(e => e.id === parseInt(this.props.match.params.id))
        this.setState({
          description: workOrder.description,
          unit_id: workOrder.unit_id,
          unit_number: workOrder.unit_number
        })
      }
 

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit() {
     
        const body = {
          
          description: this.state.description,
          notes: this.state.notes,
          id: parseInt(this.props.match.params.id)
        };
        axios.put(`/api/manager/workorder/${parseInt(this.props.match.params.id)}`, body).then( () => {
          
         
          this.props.history.push("/workorderview");
          
        });
      }
      
  render() {

    return (
        
        <div className="modifycontainer">
        <div className="modifybox">
          <h1 className ="modifyheader">Complete Work Order</h1>
          <div className="modifyunitnumber">{this.state.unitNumber}</div>
          
          <textarea
            className="modifytextarea"
           
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
           <textarea
            className="modifytextarea"
           
            name="notes"
            type="text"
            value={this.state.notes}
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
          workOrders : state.workOrders,
          user: state.user
        }
      }
      
      export default connect(mapStateToProps, {workOrderView}) (WorkOrderComplete );