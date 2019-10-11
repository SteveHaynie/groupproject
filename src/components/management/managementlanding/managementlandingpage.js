import React from 'react';
import './managementlandingpage.css'
import { workOrderView } from '../../../redux/actions.js';
import { connect } from 'react-redux';
import axios from 'axios';

class ManagementLandingPage extends React.Component{
    componentDidMount() {
        axios.get(`/api/manager/workorders/${this.props.user.id}`).then(response => {
          
         this.props.workOrderView(response.data)
        });
      }
    render(){
       
        return (
            <div className='managementHomePage'>
                <div className='body'>Welcome, {this.props.user.first_name}</div>
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      workOrders : state.workOrders,
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, {workOrderView}) (ManagementLandingPage );