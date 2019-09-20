import React from 'react';
import './managementlandingpage.css'
import { Link } from 'react-router-dom'

class ManagementLandingPage extends React.Component{

// Will work on hidden/sliding navbar onClick
    render(){
        console.log(
        "this is management page"
        )
        return (
            <div className='managementHomePage'>
                Welcome
                <div className='navbar'>
                <Link to='/unitcreation'>Create new unit</Link>
                <Link to='/users'>View users</Link>
                <Link to='/workorderview'>View work orders</Link>
                </div>
            </div>
        )
    }
}

export default ManagementLandingPage;