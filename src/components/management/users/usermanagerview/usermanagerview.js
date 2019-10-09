import React from 'react'
import axios from 'axios'
import { updateTenants } from '../../../../redux/actions.js'
import { connect } from 'react-redux'

class UserManagerView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            unit_number: '',

        }
        this.getTenant = this.getTenant.bind(this)
    }

componentDidMount() {
    if (
        this.props.tenants.length) {
            this.getTenant(this.props.tenants)}
            else {
    axios
    .get(`/api/manager/tenants/${parseInt(this.props.user.id)}`)
    .then(response => {
        this.props.updateTenants(response.data)
        this.getTenant(response.data)
    })
    }
    }


    getTenant(tenant){
        const singleTenant = tenant.find(e => 
            e.id === parseInt(this.props.match.params.id))
            
            this.setState({
               first_name: singleTenant.first_name,
               last_name: singleTenant.last_name,
               email: singleTenant.email,
               unit_number: singleTenant.unit_number
            })
        }
    
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }

    render(){
        console.log(this.state)
        return (
            <div>
               <div className="one-tenant">{this.state.first_name}</div>
                  <div className="one-tenant">{this.state.last_name}</div>
                  <div className="one-tenant">{this.state.email}</div>
                  <div className="one-tenant">{this.state.unit_number}</div>
                  <button>reset password</button> 
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
    { updateTenants }
)(UserManagerView)