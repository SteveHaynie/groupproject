import React from 'react';
import '../../menu/menu.css';
import { Link } from 'react-router-dom';


class TenantMenu extends React.Component{
   
   
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
            </div>
        )
    }
}

export default TenantMenu