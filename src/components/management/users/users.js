import React from 'react'
import { Link } from 'react-router-dom'

class Users extends React.Component{
    render(){
        return (
            <div className='managementHomePage'>
            <div className='manage-header'>Users Page</div>
            <div className='navbar'>
                 <Link to='/unitcreation'>Create new unit</Link>
                <Link to='/users'>View users</Link>
                <Link to='/workorderview'>View work orders</Link>
                <Link to ='/login'>Sign out</Link>
                </div>
            </div>
        )
    }
}

export default Users