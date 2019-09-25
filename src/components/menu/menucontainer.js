import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuContainer extends Component {
    render(){
        return (
            <div className='navbar'>
            <Link to='/unitcreation'>Create new unit</Link>
           <Link to='/users'>View users</Link>
           <Link to='/workorderview'>View work orders</Link>
           <Link to ='/login'>Sign out</Link>
           </div>
        )
    }
}

export default MenuContainer