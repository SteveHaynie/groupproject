import React from 'react';
import '../../menu/menu.css';
import { Link, withRouter } from 'react-router-dom';
import { updateUser } from '../../../redux/actions.js'
import axios from 'axios';
import { connect } from 'react-redux';


class TenantMenu extends React.Component{
   
    async handleLogout(){
        await axios.get('/api/logout')
        .then(response => {
            if(response.data === 'successfully logged out') {
                this.props.updateUser({})
                this.props.history.push('/login')
            }
        })
    }
   
    render(){
        var visibility = "hide"

        if(this.props.menuVisibility){
            visibility = "show"
        }

        return (
            <div id="popout-menu" className={visibility}>
                <Link to='tenantworkorderview'>Tenant Work Orders</Link>
                <Link to='tenantpayment'>Payments</Link>
                <Link to='tenantformsubmission'>Form Submission</Link>
                <button onClick={() => this.handleLogout()}>Sign out</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps, { updateUser }) (withRouter(TenantMenu))