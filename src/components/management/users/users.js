import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateTenants } from '../../../redux/actions';
import axios from "axios";


class Users extends React.Component {

    componentDidMount(){
        axios.get(`/api/manager/tenants/${parseInt(this.props.match.params.id)}`)
        .then(response => {
            console.log('tenants', response.data)
            this.props.updateTenants(response.data)
        })
    }
    
  render() {
      console.log(this.props)
      const tenants = this.props.tenants.map((tenant, index)=>{
        return(
            <div key = {index}>
                <div className='one-tenant'>
                {tenant.first_name}</div>
                <div className='one-tenant'>
                {tenant.last_name}</div>
                <div className='one-tenant'>
                {tenant.email}</div>
                <div className='one-tenant'>
                {tenant.unit_id}</div>
            </div>
        )
      })
    return (
        <div>
      <div className="managementHomePage">
        <div className='management-body'>
        <Link to='/useraddtenant'>Create New Tenant</Link>
            {tenants}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {tenants: state.tenants}
}

export default connect(mapStateToProps, {updateTenants}) (Users)
