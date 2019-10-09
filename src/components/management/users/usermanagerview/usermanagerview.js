import React from 'react'
import axios from 'axios'
import { updateTenants } from '../../../../redux/actions.js'
import { connect } from 'react-redux'

class UserManagerView extends React.Component{

componentDidMount(){
    axios
    .get(`/api/manager/tenants/${parseInt(this.props.match.params.id)}`)
    .then(response => {
        this.props.updateTenants(response.data)
    })
    }

    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }

    render(){
        console.log(this.state, 'this is state')
        const singleTenant = this.props.tenants.find((tenant, index) => {
            return (
                <div className="tenant-container" key={index}>
                  <div className="one-tenant">{tenant.first_name}</div>
                  <div className="one-tenant">{tenant.last_name}</div>
                  <div className="one-tenant">{tenant.email}</div>
                  <div className="one-tenant">{tenant.unit_number}</div>
                  <button>reset password</button>
                </div>
            )
        })
        return (
            <div>
                {singleTenant}
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {tenants: state.tenants,
    user: state.user
    }
}

export default connect(
    mapStateToProps,
    {updateTenants}
)(UserManagerView)