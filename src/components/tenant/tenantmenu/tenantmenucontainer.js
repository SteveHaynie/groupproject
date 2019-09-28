import React, { Component } from 'react'
import TenantMenuButton from './tenantmenubutton'
import TenantMenu from './tenantmenu'

class TenantMenuContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }

        this.toggleTenantMenu = this.toggleTenantMenu.bind(this)
        this.handleClickTenantMenu = this.handleClickTenantMenu.bind(this)

    }
    toggleTenantMenu(){
        this.setState({visible: !this.state.visible})
    }

    handleClickTenantMenu(event){
        this.toggleTenantMenu()
        event.stopPropagation()
    }
// menu should disappear after you click to a new link and page loads.
    render(){
        return (
            <div className = "tenant-menu-container">
                <TenantMenuButton handleClickTenantMenu={this.handleClickTenantMenu} />
                <TenantMenu handleClickTenantMenu={this.handleClickTenantMenu}
                menuVisibility={this.state.visible}/>
           </div>
        )
    }
}

export default TenantMenuContainer