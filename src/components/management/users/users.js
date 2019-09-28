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
            <div className='one-tenant' key = {index}>
                {tenant.first_name},
                {tenant.last_name},
                {tenant.email},
                {tenant.unit_number}
            </div>
        )
      })
    return (
        <div>
            {tenants}
      <div className="managementHomePage">
        <div className='management-body'>
        <Link to='/useraddtenant'>Create New Tenant</Link>
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
