import React from 'react';
import "./workorderview.css";
import moment from 'moment';
import { workOrderView } from '../../../redux/actions.js'
import { connect } from 'react-redux';
import axios from 'axios';

class WorkOrderView extends React.Component {


  componentDidMount() {
    axios.get(`/api/manager/workorders/${this.props.user.id}`).then(response => {
     this.props.workOrderView(response.data)
    });
  }

render () {

  
  
    return (
        <div className="managementworkordercontainer">
        {this.props.workOrders.map((workOrder, index) => (
         <div className = "managementindividualWorkOrder" key={index}>
           <div className ="managementwodate">Date Submitted: {moment(workOrder.created_at).format("lll")}</div>
            <div className="managementinformationcontainer">
              <div className="managementunitandname">
                <p className="managementunitNumber"> {workOrder.unit_id}</p>
                
              </div>
              <p className="managementissue"> {workOrder.description}</p>
              <div className="managementwonavbar">
                <button
                  className="managementwonavbarbutton"
                  onClick={() => {
                    this.props.history.push(
                      `/managementworkordermodify/${workOrder.id}`
                    );
                  }}
                >
                  Modify
                </button>

                <button
                  className="managementwonavbarbutton"
                  onClick={() => {
                    this.props.history.push(
                      `/managementworkordercompletion/${workOrder.id}`
                    );
                  }}
                >
                  Complete
                </button>

                <button
                  className="managementwonavbarbutton"
                  onClick={() => {
                    
                  }}
                >
                  Delete
                </button>
              </div>
              </div>
              
          </div>
        ))}
      </div>


    )

}

}

const mapStateToProps = (state) => {
  return {
    workOrders : state.workOrders,
    user : state.user
  }
}

export default connect(mapStateToProps, {workOrderView}) (WorkOrderView );
