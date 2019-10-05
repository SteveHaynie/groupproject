import React from 'react'
import './menu.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUser } from "../../redux/actions.js";


class Menu extends React.Component{
   

    async handleLogout(){
       
        await axios.get('/api/logout').then((response) => {
           if(response.data === 'successfully logged out') { 
               this.props.updateUser({})
            this.props.history.push('/login')}


        })
       
       
    }

    render(){
        var visibility = "hide"

        if(this.props.menuVisibility){
            visibility = "show"
        }

        return (
            <div id="popout-menu" handleClickMenu={this.props.handleClickMenu} className={visibility}>
            <Link to='/unitcreation'>Create new unit</Link>
           <Link to={`/users/${this.props.user.id}`}>View users</Link>
           <Link to='/workorderview'>View work orders</Link>
           <Link onClick={() => this.handleLogout()}>Sign out</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps, { updateUser }) (withRouter(Menu))