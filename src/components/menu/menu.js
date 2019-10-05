import React from 'react'
import './menu.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';


class Menu extends React.Component{
   

    async handleLogout(){
        console.log('clicked')
        await axios.get('/api/logout')
        this.props.history.push('/')
        console.log('logging out')
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

export default connect(mapStateToProps, {}) (withRouter(Menu))