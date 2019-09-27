import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'


class Menu extends React.Component{
    render(){
        var visibility = "hide"

        if(this.props.menuVisibility){
            visibility = "show"
        }

        return (
            <div id="popout-menu" handleClickMenu={this.props.handleClickMenu} className={visibility}>
            <Link to='/unitcreation'>Create new unit</Link>
           <Link to='/users'>View users</Link>
           <Link to='/workorderview'>View work orders</Link>
           <Link to ='/login'>Sign out</Link>
            </div>
        )
    }
}

export default Menu